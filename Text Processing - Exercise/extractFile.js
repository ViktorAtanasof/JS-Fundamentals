function extractFile(path) {
    let fileAndExtension = path.split('\\');
    let splittedFile = fileAndExtension.pop().split('.');
    let extension = splittedFile.pop();

    console.log(`File name: ${splittedFile.join('.')}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
