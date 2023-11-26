import fs from 'fs'
import path from 'path'

const readFilesInDirectory = (folderPath) => {
  const files = fs.readdirSync(folderPath);
  const fileDetails = [];

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const fileStat = fs.statSync(filePath);

    if (path.extname(file) !== '.Identifier' && !file.includes('_processed'))  {
      fileDetails.push({
        path: filePath,
        title: file,
      });
    }
  });

  return fileDetails;
};

export default readFilesInDirectory;
