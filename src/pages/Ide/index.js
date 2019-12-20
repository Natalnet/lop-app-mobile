import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ToastAndroid,
  ScrollView
} from "react-native";

import { styles } from "./styles";

import { WebView } from "react-native-webview";

import { Button, Icon } from "react-native-ui-kitten";

export default class Ide extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "input content",
      language: "",
      questionActive: true,
      description: ""
    };
    this.myWebView;
  }
  componentDidMount() {
    const { navigation } = this.props;
    const langParam = navigation.getParam("language");
    const description = navigation.getParam("description");
    const language = langParam === "C++" ? "c_cpp" : langParam;
    this.setState({ language, description });
  }

  renderPage = () => {
    const { language } = this.state;
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta name="description" content="ACE Highlighter" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=2.0, user-scalable=no" />
        <title>ACE in Action</title>
      </head>
      <style>
        * {
          padding: 0px;
          margin: 0px;
          box-sizing: border-box;
        }
        html {
          
        }
        #editor {
          width: 100%;
          box-shadow: 3px 3px 3px gray;
        }
        button.sendbtn {
          margin-top: 40px;
          width: 180px;
          height:60px;
          font-size: 50px;
          background: #428bca;
          box-shadow: 3px 3px 3px rgb(192, 192, 192);
          color: #f9f9f9;
          border: none;
          outline: none;
          border-radius: 5px;
        }
        button.sendbtn:active {
          box-shadow: none;
          border: none;
          outline: none;
        }
      </style>
      <body>
        <div class="interface">
          <div id="editor"></div>
          <button onclick="runbtn()" class="sendbtn">
            Submeter código
          </button>
        </div>
        <script src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.5/mode-c_cpp.js"></script>
        <script src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.5/mode-java.js"></script>

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.5/ace.js"
          type="text/javascript"
          charset="utf-8"
        ></script>
        <script>
          var editor = ace.edit('editor');
          editor.setOptions({
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            theme: 'ace/theme/monokai',
            minLines: 20,
            maxLines: 50,
          });
          editor.setFontSize('36px');
          editor.session.setMode('ace/mode/${language}');
          editor.resize(true);
        </script>
        <script>
          function runbtn() {
            const content = editor.container.childNodes[2].textContent;
            window.ReactNativeWebView.postMessage(content);
          }
          function addChar(char) {
            if (char === 0) {
            }
          }
        </script>
      </body>
    </html>
    
`;
  };

  questionIcon = (style, active) => {
    const { questionActive } = this.state;
    const iconName = questionActive
      ? "arrow-ios-upward-outline"
      : "arrow-ios-downward-outline";
    return <Icon {...style} name={iconName} />;
  };

  handleActiveQuestion = () => {
    const { questionActive } = this.state;
    this.setState({ questionActive: !questionActive });
  };

  render() {
    const renderLoading = () => (
      <ActivityIndicator style={{ flex: 1 }} animating color='blue' />
    );
    const { language, questionActive, description } = this.state;
    return (
      <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 20 }}>
        <Button
          onPress={this.handleActiveQuestion}
          style={styles.button}
          status='primary'
          icon={this.questionIcon}
        ></Button>

        {questionActive && (
          <ScrollView style={{ flex: 5 }}>
            <Text>{description}</Text>
          </ScrollView>
        )}
        <WebView
          style={{ marginTop: 30, flex: 1 }}
          ref={el => (this.myWebView = el)}
          showsHorizontalScrollIndicator={true}
          textZoom={40}
          renderLoading={renderLoading}
          source={{ html: this.renderPage() }}
          onMessage={event => {
            let data = event.nativeEvent.data;
            ToastAndroid.show(data, ToastAndroid.SHORT);
            this.setState({ msg: data });
          }}
        />
      </View>
    );
  }
}
