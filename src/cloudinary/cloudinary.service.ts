//Dependencies
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import toStream = require('buffer-to-stream');
import { FilesImagesService } from 'src/files_images/files_images.service';

@Injectable()
export class CloudinaryService {
  constructor(
    @Inject(forwardRef(() => FilesImagesService))
    private readonly filesImagesService: FilesImagesService,
  ) {}

  create(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    try {
      return new Promise((resolve, reject) => {
        const upload = v2.uploader.upload_stream((error, result) => {
          if (error) return reject(error);
          resolve(result);
        });
        toStream(file.buffer).pipe(upload);

        console.log(file);

        return upload;
      }).then((result: UploadApiResponse) => {
        return this.filesImagesService.create({
          original: `${result.url}`,
          format: `${result.format}`,
          image: `${result.public_id}.${result.format}`,
          baseUrl: `${process.env.CLB_API_BASEURL}/`,
          folder: `${process.env.CLB_API_FOLDER}`,
          name: `${file.originalname}`,
        });
      });
    } catch (e) {
      return e;
    }
  }
}
