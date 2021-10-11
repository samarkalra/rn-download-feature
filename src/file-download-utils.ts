import {Alert, PermissionsAndroid, Platform} from 'react-native';
import RNFetchBlob, {Encoding} from 'rn-fetch-blob';
import {EncodingNames, FileExtensions, FileType} from './enums';

export function WriteContentToFile(
  content: string,
  encoding: Encoding,
  fileExtesion: FileExtensions,
) {
  let PATH_TO_WRITE =
    RNFetchBlob.fs.dirs.DownloadDir + `/DownloadFeature/myFile${fileExtesion}`;

  RNFetchBlob.fs
    .writeFile(PATH_TO_WRITE, content, encoding)
    .then(result => {
      Alert.alert('', 'File downloaded...');
    })
    .catch(error => console.log(error));
}

export const downloadContent = (content: string, fileType: FileType) => {
  //Function to check the platform
  //If iOS the start downloading
  //If Android then ask for runtime permission
  if (Platform.OS === 'ios') {
    // downloadHistory();
  } else {
    try {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'storage title',
          message: 'storage_permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ).then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          WriteContentToFile(
            content,
            EncodingNames.base64,
            fileType === FileType.Image
              ? FileExtensions.jpg
              : FileExtensions.pdf,
          );
        } else {
          //If permission denied then show alert 'Storage Permission Not Granted'
          Alert.alert('storage_permission', 'Storage Permission Not Granted');
        }
      });
    } catch (error) {
      //To handle permission related issue
      Alert.alert('Error', error as string);
    }
  }
};
