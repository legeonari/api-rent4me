export type UTalkNotesCreated = {
  note: string;
  idContactUtalk: string;
}

export type UTalkMessageCreated = {
  message: string;
  idContactUtalk: string;
  template: string;
  params: Array<string> | Array<null>,
}