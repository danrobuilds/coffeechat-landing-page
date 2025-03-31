import React from "react";
import { Container } from "@/components/Container";
import Head from "next/head";

const styles = {
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '2rem',
    textAlign: 'center' as const,
    color: '#1a202c',
    paddingTop: '2rem',
  },
  subtitle: {
    fontSize: '1.75rem',
    fontWeight: 600,
    marginTop: '2.5rem',
    marginBottom: '1.25rem',
    color: '#2d3748',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '0.5rem',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: 1.7,
    marginBottom: '1.25rem',
    color: '#4a5568',
  },
  list: {
    marginLeft: '1.5rem',
    marginBottom: '1.5rem',
  },
  listItem: {
    marginBottom: '0.75rem',
    paddingLeft: '0.5rem',
    lineHeight: 1.6,
    color: '#4a5568',
  },
  link: {
    color: '#3182ce',
    textDecoration: 'none',
    fontWeight: 500,
    borderBottom: '1px dotted #3182ce',
  }
};

export default function TermsOfService() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Terms of Service - Coffeechat</title>
      </Head>
      <Container>
        <h1 style={styles.title}>Coffeechat Terms of Service</h1>
        <p style={styles.paragraph}>
          Effective Date: March 31, 2025
        </p>

        <h2 style={styles.subtitle}>Acceptance of Terms</h2>
        <p style={styles.paragraph}>
          By downloading, installing, or using the Coffeechat application ("Application"), provided by Daniel Rosario ("Service Provider"), you agree to comply with and be legally bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use or access the Application.
        </p>

        <h2 style={styles.subtitle}>Description of Service</h2>
        <p style={styles.paragraph}>
          Coffeechat is a professional networking application designed to facilitate connections, interactions, and messaging among professionals. The Application is offered "AS IS" and free of charge.
        </p>

        <h2 style={styles.subtitle}>Eligibility</h2>
        <p style={styles.paragraph}>
          Users must be at least 13 years old to use the Application. By agreeing to these Terms, you represent that you are at least 13 years old.
        </p>

        <h2 style={styles.subtitle}>User Account</h2>
        <p style={styles.paragraph}>
          You are required to register and create an account using your email and a secure password. You agree:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>To provide accurate and complete registration information.</li>
          <li style={styles.listItem}>To maintain the confidentiality of your password and account.</li>
          <li style={styles.listItem}>That you are responsible for all activities occurring under your account.</li>
        </ul>

        <h2 style={styles.subtitle}>User Responsibilities</h2>
        <p style={styles.paragraph}>
          By using the Application, you agree to:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Provide accurate, truthful information in your profile.</li>
          <li style={styles.listItem}>Respect other users and their privacy.</li>
          <li style={styles.listItem}>Not engage in any illegal activities or activities that violate these Terms.</li>
          <li style={styles.listItem}>Not misuse the Application or attempt unauthorized access to user data.</li>
        </ul>

        <h2 style={styles.subtitle}>Intellectual Property Rights</h2>
        <p style={styles.paragraph}>
          All intellectual property rights in the Application, including software, branding, content, and design, are owned by the Service Provider. You agree not to copy, distribute, modify, or create derivative works from any content within the Application without explicit permission from the Service Provider.
        </p>

        <h2 style={styles.subtitle}>Data Privacy</h2>
        <p style={styles.paragraph}>
          Your use of the Application is subject to our Privacy Policy, which describes our data collection, usage, and storage practices. By using the Application, you consent to these practices as outlined in our <a href="/privacy" style={styles.link}>Privacy Policy</a>.
        </p>

        <h2 style={styles.subtitle}>Termination</h2>
        <p style={styles.paragraph}>
          The Service Provider reserves the right to terminate your account or access to the Application at any time, without notice, if you breach these Terms or engage in activities harmful to the Application, other users, or the Service Provider.
        </p>

        <h2 style={styles.subtitle}>Limitation of Liability</h2>
        <p style={styles.paragraph}>
          The Service Provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use or inability to use the Application, or from interactions with other users.
        </p>

        <h2 style={styles.subtitle}>Indemnification</h2>
        <p style={styles.paragraph}>
          You agree to indemnify and hold harmless the Service Provider and their affiliates, partners, officers, agents, and employees from any claims, damages, liabilities, and expenses arising from your use of the Application, violation of these Terms, or infringement of any rights.
        </p>

        <h2 style={styles.subtitle}>Governing Law</h2>
        <p style={styles.paragraph}>
          These Terms shall be governed and interpreted according to the laws applicable in the jurisdiction where the Service Provider operates, without regard to conflicts of law provisions.
        </p>

        <h2 style={styles.subtitle}>Changes to Terms</h2>
        <p style={styles.paragraph}>
          The Service Provider reserves the right to update these Terms at any time. You will be notified of significant changes via updates in the Application or through direct communication. Continued use of the Application after changes indicates acceptance of the updated Terms.
        </p>

        <h2 style={styles.subtitle}>Contact Us</h2>
        <p style={styles.paragraph}>
          For any questions or concerns about these Terms, please contact us at:
        </p>
        <p style={styles.paragraph}>
          Email: <a href="mailto:coffeechatnetworking@gmail.com" style={styles.link}>coffeechatnetworking@gmail.com</a>
        </p>
        <p style={styles.paragraph}>
          Thank you for using Coffeechat.
        </p>
      </Container>
    </>
  );
} 