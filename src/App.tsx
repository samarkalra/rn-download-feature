import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {FileType} from './enums';
import {downloadContent, downloadContentFromUrl} from './file-download-utils';
import {files} from './fileBase64';

const App = () => {
  const onDownloadImageBase64Press = () => {
    downloadContent(files.imageBase64, FileType.Image);
  };
  const onDownloadPdfBase64Press = () => {
    downloadContent(files.pdfBase64, FileType.Pdf);
  };
  const onDownloadImageUrlPress = () => {
    downloadContentFromUrl(files.imageURL);
  };
  const onDownloadPdfUrlPress = () => {
    downloadContentFromUrl(files.pdfURL);
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="download image from base64"
          onPress={onDownloadImageBase64Press}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="download pdf from base64"
          onPress={onDownloadPdfBase64Press}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="download image from Url"
          onPress={onDownloadImageUrlPress}
        />
      </View>

      <View style={styles.button}>
        <Button title="download pdf from Url" onPress={onDownloadPdfUrlPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    marginBottom: 10,
  },
});

export default App;
