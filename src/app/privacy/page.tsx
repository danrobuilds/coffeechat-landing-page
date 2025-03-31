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

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Privacy Policy - Coffeechat</title>
      </Head>
      <Container>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.paragraph}>
          This privacy policy applies to the Coffeechat app (hereby referred to as "Application") for mobile devices that was created by Daniel Rosario (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
        </p>

        <h2 style={styles.subtitle}>Information Collection and Use</h2>
        <p style={styles.paragraph}>
          The Application collects information when you download and use it. This information may include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Your device's Internet Protocol address (e.g., IP address)</li>
          <li style={styles.listItem}>The pages of the Application that you visit, the time and date of your visit, and the time spent on those pages</li>
          <li style={styles.listItem}>The time spent on the Application</li>
          <li style={styles.listItem}>The operating system you use on your mobile device</li>
        </ul>
        <p style={styles.paragraph}>The Application does not gather precise information about the location of your mobile device.</p>
        <p style={styles.paragraph}>
          The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices, and marketing promotions.
        </p>
        <p style={styles.paragraph}>
          For a better experience, while using the Application, the Service Provider may require you to provide certain personally identifiable information, including but not limited to Email, Name, Location, Professional and Career-related information. The information that the Service Provider requests will be retained and used as described in this privacy policy.
        </p>
        <p style={styles.paragraph}>
          The Application requires user registration via email and password for authentication. Passwords are securely encrypted and stored using Supabase's authentication infrastructure. The Service Provider does not have access to your plaintext password.
        </p>
        <p style={styles.paragraph}>
          Additionally, all user messages exchanged within the Application are stored in our database to enable messaging functionality. These messages are not shared with third parties and are only accessible by the Service Provider in accordance with this Privacy Policy.
        </p>
        <p style={styles.paragraph}>
          The Application uses OpenAI embedding models to transform textual data into vector embeddings, enhancing networking capabilities.
        </p>

        <h2 style={styles.subtitle}>Third Party Access</h2>
        <p style={styles.paragraph}>
          Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties as described in this privacy statement.
        </p>
        <p style={styles.paragraph}>
          The Application utilizes third-party services that have their own Privacy Policies regarding handling data. Below are links to the Privacy Policies of third-party service providers used by the Application:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><a href="https://policies.google.com/privacy" target="_blank" style={styles.link}>Google Play Services</a></li>
          <li style={styles.listItem}><a href="https://expo.io/privacy" target="_blank" style={styles.link}>Expo</a></li>
          <li style={styles.listItem}><a href="https://supabase.io/privacy" target="_blank" style={styles.link}>Supabase</a></li>
          <li style={styles.listItem}><a href="https://openai.com/policies/privacy-policy" target="_blank" style={styles.link}>OpenAI</a></li>
        </ul>
        <p style={styles.paragraph}>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>as required by law, such as to comply with a subpoena or similar legal process;</li>
          <li style={styles.listItem}>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
          <li style={styles.listItem}>with their trusted services providers who work on their behalf, do not have independent use of the information disclosed to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
        </ul>

        <h2 style={styles.subtitle}>Opt-Out Rights</h2>
        <p style={styles.paragraph}>
          You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes available on your mobile device or via the mobile application marketplace or network.
        </p>

        <h2 style={styles.subtitle}>Data Retention Policy</h2>
        <p style={styles.paragraph}>
          The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like to delete User Provided Data provided via the Application, please contact the Service Provider at <a href="mailto:coffeechatnetworking@gmail.com" style={styles.link}>coffeechatnetworking@gmail.com</a>, and they will respond within a reasonable timeframe.
        </p>

        <h2 style={styles.subtitle}>Children's Privacy</h2>
        <p style={styles.paragraph}>
          The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. If it is discovered that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and are aware that your child has provided personal information, please contact the Service Provider at <a href="mailto:coffeechatnetworking@gmail.com" style={styles.link}>coffeechatnetworking@gmail.com</a> so necessary actions can be taken.
        </p>

        <h2 style={styles.subtitle}>Security</h2>
        <p style={styles.paragraph}>
          The Service Provider is committed to safeguarding the confidentiality of your information. Physical, electronic, and procedural safeguards are in place to protect information processed and maintained. Passwords are encrypted end-to-end through Supabase and cannot be accessed by the Service Provider.
        </p>
        <p style={styles.paragraph}>
          In the event of a data breach involving your personal data, the Service Provider will notify affected users in compliance with applicable data protection laws and regulations.
        </p>

        <h2 style={styles.subtitle}>Changes to This Privacy Policy</h2>
        <p style={styles.paragraph}>
          This Privacy Policy may be updated periodically for any reason. You will be notified of any changes by updating this page. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
        </p>
        <p style={styles.paragraph}>This privacy policy is effective as of 2025-03-31.</p>

        <h2 style={styles.subtitle}>Your Consent</h2>
        <p style={styles.paragraph}>
          By using the Application, you consent to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.
        </p>

        <h2 style={styles.subtitle}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact the Service Provider via email at <a href="mailto:coffeechatnetworking@gmail.com" style={styles.link}>coffeechatnetworking@gmail.com</a>.
        </p>
      </Container>
    </>
  );
} 