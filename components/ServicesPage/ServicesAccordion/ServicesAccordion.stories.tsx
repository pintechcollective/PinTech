import type { Meta, StoryObj } from '@storybook/react';
import ServicesAccordion from '.';

const meta = {
  title: 'Components/ServicesPage/ServicesAccordion/ServicesAccordion',
  component: ServicesAccordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Services Accordion component showcases the various services offered by the company in an interactive format.

Key Features:
- Each service is presented in a collapsible accordion item for easy navigation.
- Detailed descriptions and commitments for each service are provided upon expansion.

Copy Provided: 
**Services Page

Train
Empowering Your Team and Ours
Effective training is crucial for maximizing the benefits of AMR technology. We offer comprehensive training programs tailored to meet the needs of your team and ours. Our training services cover:
Operational Training: Educating your staff on the best practices for using and managing AMRs within your workflow, ensuring smooth and efficient operations.
Technical Training: Providing in-depth training for our technicians on the inner workings of servicing AMRs, keeping them updated with the latest advancements and repair techniques.
Consulting Services: Offering expert advice and guidance on optimizing your robot operations, enhancing productivity, and reducing costs.
Our commitment to training ensures that both your team and ours are equipped with the knowledge and skills needed to excel in the ever-evolving field of robot operations.
Deploy
Seamless Integration for Optimal Performance
Our deployment services are designed to ensure a smooth integration of AMRs into your existing operations. From initial site assessments to final installation, we handle every aspect of the deployment process. Our team of experts will:
Conduct thorough site evaluations to determine the best configuration for your AMRs.
Install robots and hardware infrastructure with precision and efficiency.
Customize and configure the system to meet your specific operational needs.
By leveraging our extensive experience and technical know-how, we guarantee a hassle-free deployment that sets the foundation for your AMRs’ success.
Maintain
Ensuring Maximum Uptime and Reliability
Keeping your robots operational with minimal downtime is our top priority. Our maintenance services are designed to provide proactive and reactive support, ensuring that your AMRs are always in peak condition. Our maintenance solutions include:
Regularly scheduled inspections and preventative maintenance to identify and address potential issues before they escalate.
Rapid response repair services to minimize downtime in case of malfunctions or damage.
Access to a dedicated support team for troubleshooting and technical assistance.
With our maintenance services, you can rely on your robots to perform consistently, allowing you to focus on your core business activities.

Preventative Maintenance: PinTech will take care of routine preventative maintenance on a schedule that best suits your robots to avoid downtime and breaks. This service typically includes an overall physical inspection and greasing of any components like casters.

Robot Deployment: Deployment services ranging from receiving robot shipment, setup, programming for service, and launch at the site.

Emergency Break-Fix Services: Robots break unexpectedly. We will respond to emergency breaks and quickly fix them to maximize uptime and remain within SLAs. 

Non-Emergency Site Visits/Repairs: An option between preventative maintenance and emergency break-fix services. Non-critical repairs that are needed**

Usage:

This component allows users to explore the company's offerings in a user-friendly manner, enhancing engagement and understanding of the services provided. `,
      },
    },
  },
  args: {},
} satisfies Meta<typeof ServicesAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
