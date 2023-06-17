import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


// import the external CSS modules style sheet here 
import termStyle from '../Terms.module.css'; 



// Add these into an external CSS stylesheet 


export default function TermsAndConditions() {
  // const termStyle = useStyles();

  return (
    <div className={termStyle.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={termStyle.paper}>
            <Typography className={termStyle.title} variant="h1" component="h1">
              Terms and Conditions
            </Typography>
            <Typography variant="body1" component="p">
              Welcome to Techster, the online store that sells electronics. These
              terms and conditions outline the rules and regulations for the use
              of Techster's website and services. By accessing this website or
              placing an order, you agree to be bound by these terms and
              conditions. If you do not agree with any part of these terms and
              conditions, you must not use this website or our services.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={termStyle.paper}>
            <Typography className={termStyle.subtitle} variant="h2" component="h2">
              Definitions
            </Typography>
            <Typography variant="body1" component="p">
              In these terms and conditions, the following words have the
              following meanings:
            </Typography>
            <ul>
              <li>
                "We", "us", "our" refer to Techster, the owner and operator of
                this website and the provider of the services.
              </li>
              <li>
                "You", "your", "customer" refer to the person or entity who
                accesses this website or places an order through this website or
                our services.
              </li>
              <li>
                "Website" refers to https://www.techster.com, including all its
                pages, content, features, and functionality.
              </li>
              <li>
                "Services" refer to the online store that sells electronics and
                any other related services that we offer through this website or
                other channels.
              </li>
              <li>
                "Products" refer to the electronics and any other items that we
                sell through our services.
              </li>
              <li>
                "Order" refers to the request or purchase of products or
                services made by you through this website or our services.
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={termStyle.paper}>
            <Typography className={termStyle.subtitle} variant="h2" component="h2">
              Acceptable Use
            </Typography>
            <Typography variant="body1" component="p">
              You agree to use this website and our services only for lawful and
              legitimate purposes. You must not use this website or our services
              in any way that violates any applicable laws or regulations, or in
              any way that infringes the rights of any third party, or in any
              way that causes harm or damage to us, our website, our services,
              our products, our reputation, or any other person or entity.
            </Typography>
            <Typography variant="body1" component="p">
              Without limiting the generality of the foregoing, you must not:
            </Typography>
            <ul>
              <li>
                Use this website or our services for any fraudulent,
                deceptive, or malicious purposes;
              </li>
              <li>
                Use this website or our services to transmit or distribute any
                viruses, malware, spyware, or other harmful or malicious code;
              </li>
              <li>
                Use this website or our services to send or post any unsolicited,
                spam, junk, or harassing messages, emails, comments, reviews, or
                other communications;
              </li>
              <li>
                Use this website or our services to impersonate any person or
                entity, or to misrepresent your identity, affiliation, or
                credentials;
              </li>
              <li>
                Use this website or our services to copy, reproduce, modify,
                distribute, sell, resell, or exploit any part of this website,
                our services, our products, or any content or materials
                available on this website or through our services, without our
                prior written consent;
              </li>
              <li>
                Use this website or our services to interfere with or disrupt
                the normal functioning of this website, our services, our
                servers, our networks, or any other systems or devices
                connected to this website or our services;
              </li>
              <li>
                Use this website or our services to violate or infringe the
                intellectual property rights, privacy rights, or any other
                rights of us or any third party;
              </li>
              <li>
                Use this website or our services to collect, store, process, or
                use any personal data of any other user or customer of this
                website or our services, without their consent and in compliance
                with all applicable laws and regulations;
              </li>
              <li>
                Use this website or our services to engage in any conduct that
                is unlawful, unethical, immoral, offensive, abusive, harmful,
                hateful, discriminatory, defamatory, libelous, slanderous,
                threatening, harassing, bullying, violent, obscene,
                pornographic, or otherwise objectionable.
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={termStyle.paper}>
            <Typography className={termStyle.subtitle} variant="h2" component="h2">
              Orders and Payments
            </Typography>
            <Typography variant="body1" component="p">
              To place an order through this website or our services, you must
              be at least 18 years old and have the legal capacity to enter into
              a contract. You must also provide us with accurate and complete
              information about yourself and your payment method. You are solely
              responsible for the accuracy and completeness of your order and
              payment information.
            </Typography>
            <Typography variant="body1" component="p">
              When you place an order through this website or our services, you
              are making an offer to purchase the products or services that you
              have selected. We reserve the right to accept or reject your order
              at our sole discretion. We will confirm the acceptance or rejection
              of your order by email. A contract between you and us will only be
              formed when we accept your order and send you a confirmation email.
            </Typography>
            <Typography variant="body1" component="p">
              The prices and availability of the products and services on this
              website are subject to change without notice. We will try to ensure
              that the prices and availability of the products and services on
              this website are accurate and up-to-date, but errors may occur. If
              we discover an error in the price or availability of the products
              or services that you have ordered, we will inform you as soon as
              possible and give you the option of confirming your order at the
              correct price or availability, or canceling your order and receiving
              a full refund.
            </Typography>
            <Typography variant="body1" component="p">
              We accept payments through Google Pay. You must have a valid Google
              account and a valid payment method linked to your Google account to
              use Google Pay. By using Google Pay, you agree to be bound by the{' '}
              <a href="https://pay.google.com/intl/en_uk/about/terms/">
                Google Pay Terms of Service
              </a>{' '}
              and{' '}
              <a href="https://policies.google.com/privacy?hl=en-GB&gl=uk">
                Google Privacy Policy
              </a>
              . We are not responsible for any fees, charges, errors,
              disputes, or issues that may arise from your use of Google Pay.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={termStyle.paper}>
            <Typography className={termStyle.subtitle} variant="h2" component="h2">
              Delivery and Returns
            </Typography>
            <Typography variant="body1" component="p">
              We deliver the products that you have ordered through courier or post,
               depending on the size and weight of the products and your location. 
               We will provide you with a tracking number and an estimated delivery date 
               when we ship your order. The delivery date is only an estimate and is not 
               guaranteed. We are not responsible for any delays, damages. 
               
            </Typography>
            </Paper>
               </Grid>
               </Grid>
               </div>
  )}
      