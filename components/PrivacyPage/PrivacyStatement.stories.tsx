import type { Meta, StoryObj } from '@storybook/react';
import PrivacyStament from '.';


const meta = {
  title: 'Components/PrivacyPage/PrivacyStatement',
  component: PrivacyStament,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The PrivacyStatement component is an essential part of the Privacy Page, designed to inform users about the company's privacy practices and policies. It outlines how user data is collected, used, and protected, fostering transparency and trust between the company and its users.
  
  Key Features:
 - Comprehensive Information: The component provides detailed information regarding data collection practices, usage, and user rights, ensuring that users are well-informed about their privacy.
 - User-Friendly Layout: The content is organized in a clear and accessible manner, making it easy for users to navigate and understand the privacy policies.
 - Responsive Design: The component is designed to be fully responsive, ensuring that users can access the privacy statement on various devices, including desktops, tablets, and smartphones.
 - Legal Compliance: The component adheres to relevant privacy regulations and standards, such as GDPR and CCPA, ensuring that the company meets its legal obligations regarding user data protection.
 - Accessibility: The component is designed with accessibility in mind, including features that support users with disabilities, such as screen reader compatibility and keyboard navigation.
  

  Usage:
This component can be integrated into the Privacy Page of the website to provide users with essential information about their privacy rights and the company's data handling practices. By clearly communicating privacy policies, the PrivacyStatement component helps build user trust and confidence in the company's commitment to protecting personal information.

**Copy Provided:**

**********Privacy Policy

Effective Date: 09/15/2024
Pinnacle Technology Collective ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, pintechcollective.com (the "Site"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
1. Information We Collect
While using our Site, we may collect certain information that can be used to identify you or your device. The types of information we may collect include:
Personal Information: We may collect personal information such as your name, email address, phone number, and any other details you voluntarily provide when you contact us or request services.
Technical Information: We collect information about your device and your use of the Site, such as IP addresses, browser type, and access times. This information is used to improve the Site's performance and user experience.
Cookies and Tracking Technologies: We use cookies and similar tracking technologies to monitor your activity on our Site and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.


2. How We Use Your Information
We use the information we collect in various ways, including:
To Provide Services: We may use your information to respond to your inquiries, provide requested services, and communicate with you about your account or the services we offer.
To Improve Our Site: We analyse the data we collect to enhance the functionality and content of our Site, ensuring that it meets your needs and preferences.
To Comply with Legal Obligations: We may use your information to comply with applicable laws, regulations, or legal processes.


3. How We Share Your Information
We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following circumstances:
Service Providers: We may share your information with third-party service providers who assist us in operating the Site or providing our services. These service providers are bound by contractual obligations to protect your information and use it only for the purposes for which it was disclosed.
Legal Compliance: We may disclose your information if required to do so by law or if we believe that such action is necessary to comply with legal obligations, protect our rights, or respond to legal claims.


4. Cookies and Tracking Technologies
We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies help us understand how you use our Site, personalise your experience, and improve our services. You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect your ability to use certain features of the Site.
5. Data Security
We implement appropriate technical and organisational measures to safeguard your personal information from unauthorised access, use, or disclosure. However, please be aware that no method of transmitting data over the internet or storing data is completely secure, and we cannot guarantee the absolute security of your information.
6. Your Privacy Rights
Under U.S. law, particularly the California Consumer Privacy Act (CCPA) for California residents, you may have certain rights regarding your personal information, including:
Right to Access: You have the right to request access to the personal information we collect about you.
Right to Delete: You may request that we delete your personal information, subject to certain exceptions.
Right to Opt-Out: You have the right to opt out of the sale of your personal information, if applicable.
To exercise these rights, please contact us using the information provided below. We will respond to your request in accordance with applicable law.
7. Third-Party Links
Our Site may contain links to third-party websites or services that are not owned or controlled by Pinnacle Technology Collective. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
8. Children’s Privacy
Our Site is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information as soon as possible.
9. Changes to This Privacy Policy
We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated Privacy Policy on this page with an updated date. Your continued use of the Site after any changes signifies your acceptance of the updated Privacy Policy.
10. Contact Us
If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
Pinnacle Technology Collective
30 N Gould St Ste R
Sheridan, Wyoming 82801
Email: info@pintechcollective.com**********
  
  ### Code Example
          
  
            \`\`\`tsx
            import PrivacyStatement from 'path/to/PrivacyStatement';
  
            \`\`\`
  
  ### Props:
  - No props are currently passed to this component.`,
      }
    },
  },
  
  args: {
  },
} satisfies Meta<typeof PrivacyStament>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};