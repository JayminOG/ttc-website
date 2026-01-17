import React from "react";
import TitleHeading from "./TitleHeading";

const PrivacyPolicySection = () => {
  return (
    <section className="w-full bg-white text-black py-16">
      <div className="max-w-5xl mx-auto px-4">
        <TitleHeading
          tag="Privacy & Policy"
          heading="Privacy Of TTC"
          align="center"
          text="text-black"
        />
        {/* Content */}
        <div className="leading-relaxed space-y-5 text-gray pt-10">
          {/* Section 1 */}
          <p>
          </p>

          {/* Purpose Heading */}
          <h2 className="text-xl font-semibold text-black">1. The Purpose</h2>
          <p>
            We are committed to maintaining the accuracy, confidentiality, and security of your personally identifiable information ("Personal Information"). The primary purpose of collecting this information is to provide you with efficient service, process inquiries for our coating solutions, and facilitate business transactions. We use your data to understand your needs better and improve our product offerings.
            {/* <br /> */}
            {/* <br /> */}
            {/* Process Any Orders Or Requests You Have Put In.
            <br />
            <br />
            We May Also Manage Or Otherwise Carry Out Our Obligations Under Any
            Agreement You May Have With Us, Anticipate And Address Problems With
            Any Goods Or Services We Supply To You, And Create Goods Or Services
            That May Be Able To Meet Your Requirements.
            <br />
            <br />
            In Order To Better Our Services, We May Use Your Personal
            Information For Direct Marketing. We Will Only Use Your Personal
            Information For This Purpose If You Are Aware Of It Because We
            Respect Your Right To Privacy. We Will Also Request Your Consent
            Before Utilizing Your Information For Direct Marketing, If
            Necessary.
            <br />
            <br />
            Please Get In Touch With Us Using The Information Provided Below If
            You Ever Want Us To Stop Using Your Information For Any Or All Of
            The Aforementioned Reasons. When It Becomes Technically Possible, We
            Will Stop Utilizing Your Information For These Purposes.
            <br />
            <br />
            Unless Otherwise Stated In This Privacy Statement, We Will Not
            Disclose Any Personally Identifiable Information Without Your
            Consent Unless We Are Required To By Law (Such As If Required To By
            A Court Order Or For The Purpose Of Preventing Fraud Or Another
            Crime), Or If We Believe That Such Action Is Necessary To Protect
            And/Or Defend Our Rights, Property, Or Personal Safety, As Well As
            The Rights, Property, Or Personal Safety Of Our Users/Customers Or
            Other Third Parties.
            <br />
            <br />
            Rest Assured That If You Have Indicated That You Do Not Want Us To
            Use Your Information In This Manner While Providing The Information
            Or Later, We Will Not Use It For Any Of The Aforementioned Purposes. */}
          </p>

          {/* Non-Personal Info */}
          <h2 className="text-xl font-semibold text-black">
            2. Collection of Non-Personal Information
          </h2>
          <p>
            When you visit our website, we may automatically collect non-personal information, such as your browser type, operating system, and the domain name of your Internet service provider. This data is used solely for internal analysis to improve the performance, usability, and design of our website. It does not identify you personally.
          </p>

          {/* Security */}
          <h2 className="text-xl font-semibold text-black">3. Security</h2>
          <p>
            We have implemented rigorous technological and operational security measures to protect your data against unauthorized access, loss, misuse, or alteration. We utilize industry-standard encryption protocols (SSL) and restrict access to personal information only to employees who need it to perform specific business tasks.
          </p>

          {/* Use Of Personal Information */}
          <h2 className="text-xl font-semibold text-black">
            4. Use of Personal Information
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. The information you provide (such as name, email, and phone number) is used exclusively to:<br />
            - Respond to your technical inquiries and quote requests.<br />
            - Process orders and manage client accounts.<br />
            - Send updates regarding our products or safety certifications (only if you have opted in).<br />

          </p>

          {/* Cookie Policy */}
          <h2 className="text-xl font-semibold text-black">5. Cookie Policy</h2>
          <p>
            Our website uses "cookies" to enhance your user experience. Cookies are small files that your web browser places on your hard drive for record-keeping purposes. We use them to track site traffic patterns and personalize content. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent, though some parts of the site may function differently as a result.
          </p>

          {/* Confidentiality */}
          <h2 className="text-xl font-semibold text-black">6. Confidentiality</h2>
          <p>
            TTC respects the proprietary nature of our clients' projects. Any technical specifications, product designs, or industrial requirements shared with us during the consultation or quotation process are treated with strict confidentiality. We do not disclose client project details to third parties without explicit consent.
          </p>

          {/* Changes To Policy */}
          <h2 className="text-xl font-semibold text-black">
            7. Changes To The Policy
          </h2>
          <p>
            We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </p>

          {/* Contact */}
          <h2 className="text-xl font-semibold text-black">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how your data is handled, please contact our administrative team:<br />
            - Email: info@thousandmilestech.com<br />
            - Address: 123 Industrial Estate, Ahmedabad, Gujarat
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
