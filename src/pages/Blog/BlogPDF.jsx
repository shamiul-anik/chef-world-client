import React from 'react';
import { Document, Page, Text, StyleSheet, Font, Image, Link } from '@react-pdf/renderer';
import { toast } from 'react-toastify';

// Create styles
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

// https://react-pdf.org/styling
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    margin: 8,
    marginTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Times-Roman',
    textDecoration: 'underline',
  },
  titleAnswer: {
    marginLeft: 8,
    marginBottom: 4,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: 'green',
  },
  text: {
    margin: 8,
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 5,
    marginHorizontal: 8,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

// Create Document Component
const BlogPDF = () => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ React Questions & Answers by Shamiul ~
      </Text>
      <Text style={styles.title}>React Questions & Answers</Text>
      <Text style={styles.author}>A. K. M. Shamiul Islam</Text>
      
      {/* Put the images in public folder */}
      <Image
        style={styles.image}
        src="/image/react-banner.png"
      />

      <Text style={styles.subtitle}>
        Question-1: Tell the differences between uncontrolled and controlled components.
      </Text>
      <Text style={styles.titleAnswer}>Answer:</Text>
      <Text style={styles.text}>
        Uncontrolled components are components that manage their own state internally and do not require any direct input or control from the parent component.
      </Text>
      <Text style={styles.text}>
        Controlled components, on the other hand, rely on the parent component to manage and control their state through props.
      </Text>
      
      <Text style={styles.subtitle}>
        Question-2: How to validate React props using PropTypes?
      </Text>
      <Text style={styles.titleAnswer}>Answer:</Text>
      <Text style={styles.text}>
        PropTypes is a built-in library in React that helps developers to validate the type and shape of props passed to a component. By defining propTypes for a component, we can ensure that the props we receive from the parent component are of the expected type and format.
      </Text>
      <Text style={styles.text}>
        To use PropTypes, we need to import the library from the 'prop-types' package, and then define the propTypes object in the component. We can specify the type of props using the PropTypes module, such as PropTypes.string, PropTypes.number, PropTypes.bool, etc. We can also define the shape of an object using PropTypes.shape().
      </Text>
      <Text style={styles.text}>
        When a component is rendered, PropTypes will check the props passed to the component and throw a warning in the console if the props don't match the expected type or shape. This helps us to catch errors early and ensure that our components receive the correct props.
      </Text>
      
      <Text style={styles.subtitle} break>
        Question-3: Tell us the difference between nodejs and express js.
      </Text>
      <Text style={styles.titleAnswer}>Answer:</Text>
      <Text style={styles.text}>
        Node.js is a runtime environment that allows user to run JavaScript on the server side. It provides features to interact with the file system, network, and other system resources.
      </Text>
      <Text style={styles.text}>
        Express.js is a web framework built on top of Node.js that provides a set of features for building web applications and APIs. It simplifies the process of handling HTTP requests, managing routes, and working with middleware.
      </Text>
      <Text style={styles.text}>
        In simple terms, Node.js is the platform while Express.js is a tool that helps user to build web applications using Node.js.
      </Text>
      
      <Text style={styles.subtitle}>
        Question-4: What is a custom hook, and why will you create a custom hook?
      </Text>
      <Text style={styles.titleAnswer}>Answer:</Text>
      <Text style={styles.text}>
        A custom hook is a function in React that allows user to reuse logic across multiple components. Custom hooks are created when user wants to share some functionality between different components, but don't want to repeat the same code in each component. Users can create custom hooks for any kind of logic that he/she wants to reuse, such as handling form data or managing state.
      </Text>
      <Text style={styles.text}>
        Using a custom hook can make code more reusable and easier to maintain. By creating a custom hook, users can abstract away the details of the logic from the components that use it, making the code cleaner and easier to understand. Custom hooks can also help users to avoid code duplication and keep the code more organized.
      </Text>
      
      {/* About React PDF */}
      <Text style={styles.title} break>
        Created with React PDF
      </Text>
      <Text style={styles.author}>
        Website: <Link src='https://react-pdf.org/'>https://react-pdf.org/</Link>
      </Text>
      <Text style={styles.subtitle}>
        Install react-pdf:
      </Text>
      <Text style={styles.text}>
        Using Yarn: yarn add @react-pdf/renderer
      </Text>
      <Text style={styles.text}>
        Using npm: npm install @react-pdf/renderer --save
      </Text>
      <Text style={styles.subtitle}>
        Other instructions:
      </Text>
      <Text style={styles.text}>
        For styling: <Link src='https://react-pdf.org/styling'>https://react-pdf.org/styling</Link>
      </Text>
      <Text style={styles.text}>
        Example: <Link src='https://react-pdf.org/repl'>https://react-pdf.org/repl</Link>
      </Text>
      <Text style={styles.text}>
        Download Button: <Link src='https://react-pdf.org/advanced#on-the-fly-rendering'>https://react-pdf.org/advanced#on-the-fly-rendering</Link>
      </Text>
      <Text style={styles.subtitle}>
        Instructions to use:
      </Text>
      <Text style={styles.text}>
        Import everything based on your requirements. 
      </Text>
      <Text style={styles.text}>
        For example: I have imported these- import "Document, Page, Text, StyleSheet, Font, Image" from '@react-pdf/renderer';
      </Text>
      <Text style={styles.text}>
        Create a component as you like. Then put everything inside "Document". Use "Text" for contents of PDF. Use appropriate styles based on your need.
      </Text>
      <Text style={styles.text}>
        Here, "styles.subtitle" is the style for "subtitle" in my case. Also "break" from "Text style='styles.subtitle' break" "Text" will move contents to the next page.
      </Text>
      <Text style={styles.text}>
        For Download Button, please follow this link: <Link src='https://react-pdf.org/advanced#on-the-fly-rendering'>https://react-pdf.org/advanced#on-the-fly-rendering</Link>.
      </Text>
      <Text style={styles.text}>
        Inside PDFDownloadLink, there is document="NAME_OF_YOUR_COMPONENT"(check the format from the previous documentation) and fileName="name.pdf". Here add the component name document="NAME_OF_YOUR_COMPONENT" and fileName="name.pdf" is for the PDF file name. I have added this button in different page.
      </Text>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

export default BlogPDF;