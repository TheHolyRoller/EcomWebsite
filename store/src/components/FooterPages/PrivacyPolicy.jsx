// PrivacyPolicy.js
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';




import styles from '../PrivacyPolicy.module.css'; 

export default function PrivacyPolicy() {

  
  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom className={styles.title}>
            Privacy Policy
          </Typography>
          <Typography variant="body1" component="p" gutterBottom className={styles.intro}>
            This privacy policy explains how we collect, use, share, and protect your personal information when you visit or use our website, mobile app, or other online services (collectively, the "Services"). Please read this policy carefully before using our Services or submitting any personal information to us.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <Typography variant="h5" component="h2" gutterBottom className={styles.subtitle}>
              What information do we collect?
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={styles.paragraph}>
              We may collect the following types of information from you when you use our Services:
            </Typography>
            <ul className={styles.list}>
              <li>Information that you provide to us directly, such as your name, email address, phone number, payment information, or other information that you enter or upload on our Services.</li>
              <li>Information that we automatically collect from your device or browser, such as your IP address, device ID, browser type, language preference, operating system, location data, cookie data, or other information that we collect through tracking technologies.</li>
              <li>Information that we obtain from third-party sources, such as social media platforms, advertising networks, analytics providers, or other service providers that we use to enhance or personalize our Services.</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <Typography variant="h5" component="h2" gutterBottom className={styles.subtitle}>
              How do we use your information?
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={styles.paragraph}>
              We may use your information for the following purposes:
            </Typography>
            <ul className={styles.list}>
              <li>To provide, maintain, improve, and personalize our Services for you.</li>
              <li>To communicate with you about our Services, promotions, offers, newsletters, or other information that may be of interest to you.</li>
              <li>To process your payments, fulfill your orders, deliver your products or services, or handle your returns or refunds.</li>
              <li>To protect the security and integrity of our Services, prevent fraud, detect and resolve technical issues, or enforce our terms and policies.</li>
              <li>To comply with legal obligations, respond to requests from authorities, or exercise our rights and defend our interests in legal proceedings.</li>
              <li>To conduct research and analysis to improve our Services and understand our users better.</li>
              <li>To measure and optimize the performance and effectiveness of our Services and advertising campaigns.</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <Typography variant="h5" component="h2" gutterBottom className={styles.subtitle}>
              How do we share your information?
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={styles.paragraph}>
              We may share your information with the following parties:
            </Typography>
            <ul className={styles.list}>
              <li>Our affiliates and subsidiaries that provide services or products related to our Services.</li>
              <li>Our service providers and partners that help us operate, support, or improve our Services, such as hosting providers, payment processors, delivery partners, analytics providers, or marketing partners.</li>
              <li>Our advertisers and advertising networks that enable us to show you relevant and personalized ads on our Services or on other websites or apps.</li>
              <li>Our business partners that offer products or services that may be of interest to you or that we jointly offer with them.</li>
              <li>Other users of our Services, if you choose to share your information publicly or with specific groups or individuals on our Services.</li>
              <li>Other parties, if we are required by law, court order, subpoena, or other legal process to disclose your information, or if we believe that disclosing your information is necessary to protect our rights, interests, or property, or the rights, interests, or property of others.</li>
              <li>Other parties, if we are involved in a merger, acquisition, sale, reorganization, or transfer of some or all of our assets, in which case your information may be transferred to the new entity as part of the transaction.</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <Typography variant="h5" component="h2" gutterBottom className={styles.subtitle}>
              How do we protect your information?
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={styles.paragraph}>
              We take reasonable measures to protect your information from unauthorized access, use, modification, or disclosure. However, no method of transmission or storage is completely secure, and we cannot guarantee the absolute security of your information. If you have any questions about the security of our Services, please contact us using the information below.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <Typography variant="h5" component="h2" gutterBottom className={styles.subtitle}>
              How do we use cookies and other tracking technologies?
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={styles.paragraph}>
              We and our service providers and partners may use cookies, web beacons, pixels, scripts, local storage, and other similar technologies to collect and store information about your use of our Services or other websites or apps. These technologies help us to recognize you, remember your preferences, customize your experience, analyze your usage, deliver relevant and personalized ads, and monitor and prevent fraud. You can learn more about how we use cookies and how you can manage your cookie settings in our Cookie Policy.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <Typography variant="h5" component="h2" gutterBottom className={styles.subtitle}>
              What are your choices and rights regarding your information?
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={styles.paragraph}>
              Depending on your location and applicable laws, you may have certain choices and rights regarding your information, such as:
            </Typography>
            <ul className={styles.list}>
              <li>You can access, update, correct, or delete your information by logging into your account or contacting us using the information below.</li>
              <li>You can opt out of receiving marketing communications from us by following the unsubscribe link in our emails or adjusting your account settings.</li>
              <li>You can change your browser settings to block or delete cookies or other tracking technologies.</li>
              <li>You can request a copy of your information or ask us to transfer it to another party of your choice.</li>
              <li>You can object to or restrict our processing of your information for certain purposes.</li>
              <li>You can withdraw your consent to our processing of your information at any time.</li>
              <li>You can lodge a complaint with a data protection authority if you are not satisfied with how we handle your information.</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h5" component="h2" gutterBottom className={styles.subtitle}>
              How do we update this privacy policy?
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={styles.paragraph}>
              We may update this privacy policy from time to time to reflect changes in our practices, technologies, legal requirements, or other reasons. We will notify you of any material changes by posting the updated policy on our Services or by sending you an email or other notification. You should review this policy periodically to stay informed about how we collect, use, and share your information.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h5" component="h2" gutterBottom className={styles.subtitle}>
              How can you contact us?
            </Typography>
            
            </Paper>
            </Grid>
            </Grid>
            </div>
  )}
         
            