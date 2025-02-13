import type { Meta, StoryObj } from '@storybook/react';
import TermsStatement from '.';


const meta = {
  title: 'Components/TermsPage/TermsStatment',
  component: TermsStatement,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Terms of Service statement outlines the rules and guidelines for using the Pinnacle Technology Collective website. It establishes the legal framework for user interactions, including user responsibilities, intellectual property rights, and limitations of liability. By using the Site, users agree to comply with these terms, which are designed to protect both the users and the company. Key aspects include eligibility requirements, permitted use of the Site, and the process for dispute resolution. Users are encouraged to read the Terms carefully to understand their rights and obligations.
  
  Key Features:
 - Comprehensive Information: The component provides detailed information regarding data collection practices, usage, and user rights, ensuring that users are well-informed about their privacy.
 - User-Friendly Layout: The content is organized in a clear and accessible manner, making it easy for users to navigate and understand the agreement policies.
 - Responsive Design: The component is designed to be fully responsive, ensuring that users can access the terms statement on various devices, including desktops, tablets, and smartphones.
 - Legal Compliance: The component adheres to relevant agreement regulations and standards, such as GDPR and CCPA, ensuring that the company meets its legal obligations regarding user data protection.
 - Accessibility: The component is designed with accessibility in mind, including features that support users with disabilities, such as screen reader compatibility and keyboard navigation.
  

  Usage:
This component can be integrated into the Privacy Page of the website to provide users with essential information about their privacy rights and the company's data handling practices. By clearly communicating privacy policies, the PrivacyStatement component helps build user trust and confidence in the company's commitment to protecting personal information.

**Copy Provided:**
Terms of Service
Effective Date: 09/15/2024
Welcome to Pinnacle Technology Collective (“we,” “us,” or “our”). These Terms of Service (“Terms”) govern your use of our website, [pintechcollective.com] (the “Site”). By accessing or using the Site, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use the Site.
1. Use of the Site
Eligibility: You must be at least 18 years old to use the Site. By using the Site, you represent and warrant that you are of legal age to form a binding contract with us and that you comply with all applicable local, state, and federal laws and regulations.
Permitted Use: You may use the Site for lawful purposes only. You agree not to use the Site for any illegal or unauthorised purpose, including, but not limited to, violating any intellectual property or privacy rights, or transmitting harmful code such as viruses.
2. Intellectual Property Rights
Ownership: All content on the Site, including but not limited to text, graphics, logos, images, and software, is the exclusive property of Pinnacle Technology Collective or its licensors and is protected by copyright, trademark, and other intellectual property laws.
Licence: We grant you a limited, non-exclusive, non-transferable, and revocable licence to access and use the Site for personal, non-commercial purposes. You may not copy, distribute, modify, or create derivative works of any content on the Site without our prior written consent, except as explicitly permitted by law.
3. User Content
Responsibility: If you submit any content to the Site, including comments, feedback, or other materials (“User Content”), you are solely responsible for ensuring that your User Content complies with these Terms and all applicable laws and does not infringe on the rights of any third party.
Licence to Us: By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free, perpetual, and irrevocable licence to use, reproduce, modify, publish, translate, distribute, perform, display, and create derivative works of your User Content in connection with the operation of the Site and our business.
4. Disclaimers and Limitation of Liability
No Warranties: The Site is provided on an “as is” and “as available” basis without any warranties of any kind, either express or implied. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or secure, or that any defects will be corrected.
Limitation of Liability: To the fullest extent permitted by law, Pinnacle Technology Collective, its affiliates, directors, officers, employees, agents, and licensors shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including lost profits, revenue, or data, arising out of or related to your use of the Site.
5. Indemnification
You agree to indemnify, defend, and hold harmless Pinnacle Technology Collective and its affiliates, officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or related to your use of the Site, your violation of these Terms, or any User Content you submit.
6. Governing Law and Dispute Resolution
Governing Law: These Terms and any disputes arising from them shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law principles.
Dispute Resolution: Any disputes arising out of or relating to these Terms or your use of the Site shall be resolved through binding arbitration in [Insert City, Wyoming], in accordance with the rules of the American Arbitration Association. Both parties agree to waive any right to trial by jury.
7. Changes to These Terms
We may update these Terms from time to time at our sole discretion. We will notify you of any significant changes by posting the updated Terms on this page with an updated effective date. Your continued use of the Site after any changes signifies your acceptance of the updated Terms.
8. Termination
We reserve the right to terminate or suspend your access to the Site, without notice or liability, for conduct that we believe, in our sole discretion, violates these Terms, is harmful to other users, our business, or third parties, or for any other reason at our sole discretion.
9. Contact Us
If you have any questions or concerns about these Terms, please contact us at:
Pinnacle Technology Collective
30 N Gould St. Ste. R
Sheridan, WY 82801
Email: info@pintechcollective.com

*********
  
  ### Code Example
          
  
            \`\`\`tsx
            import TermsStatement from 'path/to/TermsStatement';
  
            \`\`\`
  
  ### Props:
  - No props are currently passed to this component.`,
      }
    },
  },
  args: {
  },
} satisfies Meta<typeof TermsStatement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};