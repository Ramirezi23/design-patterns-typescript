import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/image/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backUp();
imageEditor.convertFormatTo('gif');

backupManager.backUp();
imageEditor.convertFormatTo('bmp');

backupManager.backUp();
imageEditor.convertFormatTo('jpg');

console.log(imageEditor); //jpg

backupManager.undo();
console.log(imageEditor); // bmp

backupManager.undo();
console.log(imageEditor); // gif

backupManager.undo();
console.log(imageEditor); // png

backupManager.undo(); // no mementos
console.log(imageEditor); // png
