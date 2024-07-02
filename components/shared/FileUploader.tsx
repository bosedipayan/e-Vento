import React, { Dispatch, SetStateAction } from "react";

type FileUploaderProps = {
  imageUrl: string;
  onFieldChange: (value: string) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

const FileUploader = ({
  onFieldChange,
  imageUrl,
  setFiles,
}: FileUploaderProps) => {
  return <div>FileUploader</div>;
};

export default FileUploader;
