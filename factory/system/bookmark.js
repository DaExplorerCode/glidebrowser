import fs from 'node:fs';
import fsprom from 'node:fs/promises';
import path from 'path';
export default function saveBookMark(name, url, folder, onRootFolder){
    fs.appendFile(path.join(__dirname, '/data/bookmark/', folder, name), "") //ini pula masi belom jadi 
}
export async function exploreBookMark(rootSource, onRootFolder){
    var bookmarkFolder
    var bookmarksDataBefore = []
    var fileCount = 0
    var result
    if (rootSource = 'main') {
     bookmarkFolder = "bookmark/" + onRootFolder
    } else if (rootSource === "tab"){
     bookmarkFolder = "bookmark/Bookmarks Tab/" + onRootFolder
    } else if (rootSource === "toolbar"){
     bookmarkFolder = "bookmark/Bookmarks Toolbar/" + onRootFolder
    } else if (rootSource === "other" ){
     bookmarkFolder = "bookmark/Other Bookmarks/" + onRootFolder
    } else {
      return {
       result: "specify the rootsource first",
       bookmarksData: ''
      }
    }
    if (bookmarkFolder !== '') {
      try {
    const bookMarkfolder = await fsprom.opendir(path.join(__dirname, bookmarkFolder))
    if (bookMarkfolder.length > 0) {
    for await (const bookmark of bookMarkfolder){
     if (bookmark.isDirectory()) {
      bookmarksDataBefore.push({name: bookmark.name, contentIs: "folder"})
      fileCount += 1
     } else if (bookmark.isFile()) {
      bookmarksDataBefore.push({name: bookmark.name, contentIs: "file"})
      fileCount += 1
     }
    }
  } else {
    result = "NOCONTENT"
  }
} catch (err){
  return {
    result: err,
    bookmarksData: ''
  }
}
    const bookmarksData = bookmarksDataBefore
    return {
    result,
    bookmarksData,
    }
    }
    // const file = await fsprom.open('./');  buat nanti ngedetect filenya maybe :]
}
export async function loadBookMark(path){
  var file = path.join(__dirname, '/data/bookmark')
  for await (const line of file.readLines()) {
    console.log(line);
  }
}