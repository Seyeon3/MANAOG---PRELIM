import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const pages = [
    'name',
    'education',
    'about',
    'hobbies',
    'socialMed',
    'socialMed2',
    'contact',
  ];

  const resumeData = {
    imageUrl: require('./assets/profile.jpeg'),
    name: 'Sean Michael O. Manaog',
    course: 'Bachelor of Science in Information Technology',
    education: {
      elementary: 'Bagong Barrio Elementary School',
      elementaryYear: '2009 - 2015',
      highschool: 'Bagong Barrio National High School',
      highschoolYear: '2015 - 2019',
      seniorhighschool: 'ABE International business college',
      seniorhighschoolYear: '2019 - 2020',
      college: 'Global Reciprocal College',
      collegeYear: '2021 - 2025',
    },
    about:
      "My name is Sean Michael and I'm currently a 3rd-year college student pursuing a Bachelor of Science in Information Technology.",
    hobbies: [
      'Reading',
      'Playing guitar',
      'Hiking',
      'Coding',
      'Watching Kdrama',
    ],
    socialMed: {
      socialMediaName: 'Facebook',
      imageSrc: 'https://alliedallcityinc.com/images/Facebook-logo_0.png',
      link: 'https://www.facebook.com/sean.manaog.7',
      description: 'This is my Facebook account.',
    },
    socialMed2: {
      socialMediaName2: 'Instagram',
      imageSrc:
        'https://thumbor.forbes.com/thumbor/960x0/https://blogs-images.forbes.com/joresablount/files/2019/08/unnamed-1200x1191.jpg',
      link2: 'https://www.instagram.com/sean-michael',
      description: 'This is my Instagram account',
    },
    contact: {
      mobile: '0961-1020-471',
      email: 'seanmanaog22@gmail.com',
    },
  };

  const handlePress = () => {
    setCurrentPageIndex((prevIndex) => {
      switch (pages[prevIndex]) {
        case 'name':
          return pages.indexOf('education');
        case 'education':
          return pages.indexOf('about');
        case 'about':
          return pages.indexOf('hobbies');
        case 'hobbies':
          return pages.indexOf('socialMed');
        case 'socialMed':
          return pages.indexOf('socialMed2');
        case 'socialMed2':
          return pages.indexOf('contact');
        case 'contact':
          return pages.indexOf('name');
        default:
          return 0;
      }
    });
  };

  const currentPageKey = pages[currentPageIndex];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handlePress}>
          {currentPageKey === 'name' && (
            <>
              <View style={styles.imageContainer}>
                <Image source={resumeData.imageUrl} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.header}>{resumeData.name}</Text>
                <Text style={styles.info}>{resumeData.course}</Text>
              </View>
            </>
          )}

          {currentPageKey === 'education' && (
            <View style={styles.textContainer}>
              <Text style={styles.header1}>Education:</Text>
              <Text style={styles.projectTitle}>
                {'\n'}College:
                {'\n'}
                {resumeData.education.college}
                {' | '}
                {resumeData.education.collegeYear}
              </Text>

              <Text style={styles.projectTitle}>
                {'\n'}Senior High School:
                {'\n'}
                {resumeData.education.seniorhighschool}
                {' | '}
                {resumeData.education.seniorhighschoolYear}
              </Text>

              <Text style={styles.projectTitle}>
                {'\n'}High School:
                {'\n'}
                {resumeData.education.highschool}
                {' | '}
                {resumeData.education.highschoolYear}
              </Text>

              <Text style={styles.projectTitle}>
                {'\n'}Elementary:
                {'\n'}
                {resumeData.education.elementary}
                {' | '}
                {resumeData.education.elementaryYear}
              </Text>
            </View>
          )}

          {currentPageKey === 'about' && (
            <View style={styles.textContainer}>
              <Text style={styles.header1}>About Me:</Text>
              <Text style={styles.aboutText}>{resumeData.about}</Text>
            </View>
          )}

          {currentPageKey === 'hobbies' && (
            <View style={styles.textContainer}>
              <Text style={styles.header1}>Hobbies:</Text>
              {resumeData.hobbies.map((hobby, index) => (
                <Text key={index} style={styles.hobby}>
                  {hobby}
                </Text>
              ))}
            </View>
          )}

          {currentPageKey === 'socialMed' && (
            <View style={styles.projectContainer}>
              <Text style={styles.header1}>Social Media:</Text>
              <Text style={styles.socailmediaTitle}>
                {resumeData.socialMed.socialMediaName}
              </Text>
              <Image
                source={{ uri: resumeData.socialMed.imageSrc }}
                style={styles.projectImage}
              />

              <TouchableOpacity
                onPress={() =>
                  console.log(
                    'Social Media clicked:',
                    resumeData.socialMed.link
                  )
                }>
                <Text style={[styles.link, styles.blue]}>
                  {resumeData.socialMed.link}
                </Text>
              </TouchableOpacity>
              <Text style={styles.socialmedDescription}>
                {resumeData.socialMed.description}
              </Text>
            </View>
          )}

          {currentPageKey === 'socialMed2' && (
            <View style={styles.projectContainer}>
              <Text style={styles.header1}>Social Media:</Text>
              <Text style={styles.socailmediaTitle}>
                {resumeData.socialMed2.socialMediaName2}
              </Text>
              <Image
                source={{ uri: resumeData.socialMed2.imageSrc }}
                style={styles.projectImage}
              />

              <TouchableOpacity
                onPress={() =>
                  console.log(
                    'Social Media clicked:',
                    resumeData.socialMed2.link2
                  )
                }>
                <Text style={[styles.link, styles.blue]}>
                  {resumeData.socialMed2.link2}
                </Text>
              </TouchableOpacity>
              <Text style={styles.socialmedDescription}>
                {resumeData.socialMed2.description}
              </Text>
            </View>
          )}
          {currentPageKey === 'contact' && (
            <View style={styles.textContainer}>
              <Text style={styles.header1}>Contact Me:{'\n'}</Text>
              <Text style={styles.info1}>
                {'\n'} Mobile: {resumeData.contact.mobile},{'\n'} Email:{' '}
                {resumeData.contact.email}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  textContainer: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  header1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  info: {
    fontSize: 20,
    alignSelf: 'flex-start',
    textAlign: 'center',
  },

  aboutText: {
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  hobby: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'left',
  },
  projectImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignSelf: 'center',
  },
  link: {
    marginBottom: 5,
    textAlign: 'center',
  },
  blue: {
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
  },
  socialmedDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
});

export default App;
