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

        return upload;
      }).then((result: UploadApiResponse) => {
        return this.filesImagesService.create({
          original: `${result.url}`,
          format: `${result.format}`,
          size65x65: `${process.env.CLB_API_BASEURL}/t_crop-thumb-65/${process.env.CLB_API_FOLDER}/${result.public_id}.${result.format}`,
          size450x300: `${process.env.CLB_API_BASEURL}/t_gallery_new/${process.env.CLB_API_FOLDER}/${result.public_id}.${result.format}`,
          size1080x1800: `${process.env.CLB_API_BASEURL}/t_store-contents/${process.env.CLB_API_FOLDER}/${result.public_id}.${result.format}`,
          size450x270: `${process.env.CLB_API_BASEURL}/t_thumb_car/${process.env.CLB_API_FOLDER}/${result.public_id}.${result.format}`,
        });
      });
    } catch (e) {
      return e;
    }
  }
}
