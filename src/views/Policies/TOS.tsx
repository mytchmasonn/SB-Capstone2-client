import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Footer from "components/Footer/Footer";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

import { Context as ThemeContext } from "context/ThemeContext";
import {
  lightStyles,
  darkStyles,
} from "assets/jss/html8pdf/views/TOS/tosPageStyle";
const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

export default function TermsOfServicePage() {
  const { state }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();
  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem
            md={8}
            sm={8}
            className={classNames(
              classes.mlAuto,
              classes.mrAuto,
              classes.textCenter
            )}
          >
            <h1 className={classes.title}>TERMS OF SERVICES</h1>
          </GridItem>
        </GridContainer>
      </div>

      <div className={classes.container}>
        <div>
          <h2 style={{ textAlign: "center", paddingTop: "10px" }}>
            <strong>HTML8PDF TERMS OF SERVICES</strong>
          </h2>
          <br />
          <br />
          Our terms and conditions.
          <br />
          <br />
          These terms and conditions are divided into the following parts:
          <br />
          (A) a disclaimer of liability; (B) terms and conditions governing the
          use of this website; and (D) general and interpretive provisions.'
          <br />
          <br />
          By using our website, you accept these terms and conditions in full.
          If you disagree with these terms and conditions or any part of these
          terms and conditions, you must not use our website. If you register
          with our website or buy any product or service from our website, we
          will ask you to expressly agree to these terms and conditions.
          <br />
          Our website uses cookies. By using our website and agreeing to these
          terms and conditions, you consent to our use of cookies in accordance
          with the terms of our privacy policy.
          <br />
          <br />
          <h3>
            <strong>(A) General disclaimer</strong>
          </h3>
          <br />
          <br />
          <strong>
            (1) Exclusion of warranties, representations and guarantees
          </strong>
          <br />
          <br />
          We do not warrant, represent or guarantee: the accuracy of the
          information published on this website; the completeness of the
          information published on this website; that the information published
          on this website is up-to-date; or the information on the website can
          be applied to achieve any particular result. To the maximum extent
          permitted by applicable law we exclude all representations, warranties
          and guarantees relating to this website and the use of this website
          (including, without limitation, any warranties implied by law of
          satisfactory quality, fitness for purpose and/or the use of reasonable
          care and skill).
          <br />
          <br />
          <strong>(2) Limitations and exclusions of liability</strong>
          Nothing in these terms and conditions will: (a) limit or exclude our
          or your liability for death or personal injury resulting from
          negligence; (b) limit or exclude our or your liability for fraud or
          fraudulent misrepresentation; (c) limit any of our or your liabilities
          in any way that is not permitted under applicable law; or (d) exclude
          any of our or your liabilities that may not be excluded under
          applicable law.
          <br />
          The limitations and exclusions of liability set out in this Section
          and elsewhere in these terms and conditions: (a) are subject to the
          preceding paragraph; and (b) govern all liabilities arising under the
          terms and conditions or in relation to the subject matter of the terms
          and conditions, including liabilities arising in contract, in tort
          (including negligence) and for breach of statutory duty.
          <br />
          To the extent that the website and the information and services on the
          website are provided free-of-charge, we will not be liable for any
          loss or damage of any nature.
          <br />
          We will not be liable to you in respect of any losses arising out of
          any event or events beyond our reasonable control.
          <br />
          We will not be liable to you in respect of any business losses.
          <br />
          We will not be liable to you in respect of any loss of or damage to
          profits, income, revenue, or anticipated savings.
          <br />
          We will not be liable to you in respect of any loss of use or
          production.
          <br />
          We will not be liable to you in respect of any loss of management time
          or office time.
          <br />
          We will not be liable to you in respect of any loss of business,
          contracts, commercial opportunities or goodwill.
          <br />
          We will not be liable to you in respect of any loss or corruption of
          any data, database or software.
          <br />
          We will not be liable to you in respect of any special, indirect or
          consequential loss or damage.
          <br />
          We will not be liable to you in respect of any losses arising out of
          any acts or omissions of any hosting services provider, payment
          services provider or other third party services provider.
          <br />
          You accept that we have an interest in limiting the personal liability
          of our directors and employees. Having regard to that interest, you
          accept that we are a limited liability entity and agree that you will
          not bring any claim personally against individual directors or
          employees in respect of any losses you suffer in connection with the
          website or these terms and conditions. This will not, of course, limit
          or exclude the liability of the company itself for the acts and
          omissions of our members and employees.
          <br />
          <br />
          <strong>(3) Third party content</strong>
          <br />
          <br />
          You acknowledge that some of the information published on this website
          is submitted or provided by users, law firm partners and other third
          parties, and that we do not usually review, approve or take editorial
          responsibility such information.
          <br />
          You agree to the publication of comments, reviews and/or feedback
          relating to you, by others, on our website. You acknowledge that such
          comments, reviews and/or feedback may be critical or defamatory or
          otherwise unlawful; and you agree that you will not hold us liable in
          respect of any such comments, reviews and/or feedback, irrespective of
          whether we are aware or ought to he been aware of such comments,
          reviews and/or feedback.
          <br />
          <br />
          <strong>(4) Website availability</strong>
          <br />
          <br />
          From time to time the website or features of the website will be
          unavailable. Such unavailability may be the result of defects in the
          website software, scheduled or emergency maintenance procedures, or
          failures of third party service providers.
          <br />
          We do not commit to ensuring that the website will be available at any
          particular time.
          <br />
          Furthermore, we do not commit to ensure that the website will continue
          to be published in the future.
          <br />
          <br />
          <strong>(5) Interactive features</strong>
          <br />
          <br />
          Our website includes interactive features that allow users to
          communicate with us and our partner law firms. You acknowledge that,
          because of the limited nature of such communication, any legal
          assistance you may receive using any such facility is likely to be
          incomplete and may be misleading. Any legal assistance you may receive
          using any such facility does not constitute legal advice and
          accordingly should not be relied upon. No solicitor-client or
          attorney-client relationship shall be created through the use of our
          website.
          <br />
          <br />
          <strong>(6) Our partners</strong>
          <br />
          <br />
          The limitations of liability in these terms and conditions shall
          protect the following persons in respect of any claims made by any
          affiliate service customer or any user of this website: (a) any
          affiliate service's law firm partner; (b) any supplier of any legal
          document or documents made available on our website; (c) any supplier
          of other legal content made available on our website; and (d) any
          officer, employee, partner or member of any person referred to in
          sub-paragraphs (a) to (c). For the avoidance of doubt, this Section 8
          shall not affect the terms of any solicitor-client or attorney-client
          relationship expressly agreed and entered into between a website user
          and any law firm.
          <br />
          <br />
          <h3>
            <strong>(B) Terms and conditions of use</strong>
          </h3>
          <br />
          <br />
          <strong>(7) license to use website</strong>
          <br />
          <br />
          Unless otherwise stated, we or our licensors own the intellectual
          property rights in the website and material on the website. Subject to
          the license below, all these intellectual property rights are
          reserved.
          <br />
          You may view, download for caching purposes only, and print pages from
          the website for your own personal use, subject to the restrictions set
          out below and elsewhere in these terms and conditions of use. You must
          not: (a) republish material from this website (including republication
          on another website); (b) sell, rent or sub-license material from the
          website; (c) show any material from the website in public; (d)
          reproduce, duplicate, copy or otherwise exploit material on our
          website for a commercial purpose; (e) edit or otherwise modify any
          material on the website; or (f) redistribute material from this
          website, except for content specifically and expressly made available
          for redistribution (such as our newsletter).
          <br />
          Where content is specifically made available for redistribution, it
          may only be redistributed within your organisation.
          <br />
          You may access our RSS feed by following the instruction on our
          website. By accessing the our RSS feed you accept these terms and
          conditions. Subject to your acceptance of these terms and conditions,
          and notwithstanding the restrictions set out above, we grant to you a
          non-exclusive non-transferable non-sub-licensable license to display
          our RSS feed in unmodified form on any non-commercial website owned
          and operated by you. It is a condition of this license that you
          include a credit for us and hyperlink to our website on each web page
          where the RSS feed is published (in such form as we may specify from
          time to time, or if we do not specify any particular form, in a
          reasonable form). We may revoke this license at any time, by giving
          your written notice of revocation.
          <br />
          This Section 9 does not apply to the use our free and premium legal
          templates. licenses to use the templates are set out below.
          <br />
          <br />
          <strong>(8) Acceptable use</strong>
          <br />
          <br />
          You must not use our website in any way that causes, or may cause,
          damage to the website or impairment of the availability or
          accessibility of the website; or in any way which is unlawful,
          illegal, fraudulent or harmful, or in connection with any unlawful,
          illegal, fraudulent or harmful purpose or activity. You must not use
          our website to copy, store, host, transmit, send, use, publish or
          distribute any material which consists of (or is linked to) any
          spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit
          or other malicious computer software. You must not conduct any
          systematic or automated data collection activities (including without
          limitation scraping, data mining, data extraction and data harvesting)
          on or in relation to our website without our express written consent.
          You must not use our website to transmit or send unsolicited
          commercial communication. You must not use our website for any
          purposes related to marketing without our express written consent.
          <br />
          <br />
          <strong>(9) Restricted access</strong>
          <br />
          <br />
          Access to certain areas of our website is restricted. We reserve the
          right to restrict access to other areas of our website, or indeed our
          whole website, at our discretion. If we provide you with or you
          generate a password to enable you to access restricted areas of our
          website or other content or services, you must ensure that that
          password is kept confidential. You must notify us in writing
          immediately if you become aware of any unauthorised use of your
          account or password. You are responsible for any activity on our
          website arising out of any failure to keep your password confidential,
          and may be held liable for any losses arising out of such a failure.
          You must not use any other person's user ID and password to access our
          website. We may disable your account on the website in our sole
          discretion without notice or explanation.
          <br />
          <br />
          <strong>(10) User content</strong>
          <br />
          <br />
          In these terms and conditions of use, “your content” means material
          (including without limitation text, images, audio material, video
          material and audio-visual material) that you submit to our website,
          for whatever purpose.
          <br />
          You grant to us a worldwide, irrevocable, non-exclusive, royalty-free
          license to use, reproduce, adapt, publish, translate and distribute
          your content in any existing or future media. You also grant to us the
          right to sub-license these rights, and the right to bring an action
          for infringement of these rights. You warrant and represent that your
          content will comply with these terms and conditions. Your content must
          not be illegal or unlawful, must not infringe any third party's legal
          rights, and must not be capable of giving rise to legal action whether
          against you or us or a third party (in each case under any applicable
          law).
          <br />
          Your content (and its publication on our website) must not: (a) be
          libellous or maliciously false; (b) be obscene or indecent; (c)
          infringe any copyright, moral right, database right, trade mark right,
          design right, right in passing off, or other intellectual property
          right; (d) infringe any right of confidence, right of privacy, or
          right under data protection legislation; (e) constitute negligent
          advice or contain any negligent statement; (f) constitute an
          incitement to commit a crime; (g) be in contempt of any court, or in
          breach of any court order; (h) be in breach of racial or religious
          hatred or discrimination legislation; (i) be blasphemous; (j) be in
          breach of official secrets legislation; (k) be in breach of any
          contractual obligation owed to any person; (l) depict violence in an
          explicit, graphic or gratuitous manner; (m) be pornographic or
          sexually explicit; (n) be untrue, false, inaccurate or misleading; (o)
          consist of or contain any instructions, advice or other information
          which may be acted upon and could, if acted upon, cause illness,
          injury or death, or any other loss or damage; (p) constitute spam; (q)
          be offensive, deceptive, threatening, abusive, harassing, or menacing,
          hateful, discriminatory or inflammatory; or (r) cause annoyance,
          inconvenience or needless anxiety to any person.
          <br />
          Your content must be appropriate, civil, tasteful and accord with
          generally accepted standards of etiquette and behaviour on the
          internet. You must not use our website to link to any website or web
          page consisting of or containing material that would, were it posted
          on our website, breach the provisions of these terms and conditions.
          <br />
          You must not submit any user content to the website that is or has
          ever been the subject of any threatened or actual legal proceedings or
          other similar complaint.
          <br />
          We reserve the right to edit or remove any material submitted to our
          website, or stored on our servers, or hosted or published upon our
          website.
          <br />
          Notwithstanding our rights under these terms and conditions in
          relation to user content, we do not undertake to monitor the
          submission of such content to, or the publication of such content on,
          our website.
          <br />
          If you become aware of any content on the website that breaches these
          terms and conditions, please notify us immediately by email or using
          our website contact form.
          <br />
          <br />
          <strong>(11) Third party websites</strong>
          <br />
          <br />
          Our website includes hyperlinks to other websites owned and operated
          by third parties. These links are not recommendations. We have no
          control over the contents of third party websites, and we accept no
          responsibility for them or for any loss or damage that may arise from
          your use of them.
          <br />
          <br />
          <h3>
            <strong>
              (C) FREE DOCUMENT AND WEBPAGE/WEBAPP license LICENSE
            </strong>
          </h3>
          <br />
          <br />
          <strong>(12) Intellectual property rights</strong>
          <br />
          <br />
          We own the intellectual property rights in the free templates
          available on this website. Subject to the license below, all our
          intellectual property rights are reserved.
          <br />
          <h3>
            <strong>(D) GENERAL AND INTERPRETATIVE PROVISIONS</strong>
          </h3>
          <br />
          <br />
          <strong>(13) Indemnity</strong>
          <br />
          <br />
          You hereby indemnify us and undertake to keep us indemnified against
          any losses, damages, costs, liabilities and expenses (including
          without limitation legal expenses and any amounts paid by us to a
          third party in settlement of a claim or dispute) incurred or suffered
          by us arising out of any breach by you of any provision of these terms
          and conditions, or arising out of any claim that you have breached any
          provision of these terms and conditions.
          <br />
          <br />
          <strong>(14) Breaches of these terms and conditions</strong>
          <br />
          <br />
          Without prejudice to our other rights, if you breach these terms and
          conditions of use in any way, or if we reasonably suspect that you
          have breached these terms and conditions of use in any way, we may:
          (a) send you one or more formal warnings; (b) temporarily suspend your
          access to the website; (c) permanently prohibit you from accessing the
          website; (d) block computers using your IP address from accessing the
          website; (e) contact your internet services provider and request that
          they block your access to the website; (f) bring court proceedings
          against you for breach of contract or otherwise; (g) suspend and/or
          delete your account with the website; and/or (h) delete and/or edit
          any or all of your content.
          <br />
          Where we suspend or prohibit or block your access to our website or a
          part of our website, you must not take any action to circumvent such
          suspension or prohibition or blocking (including without limitation
          creating and/or using a different account).
          <br />
          <br />
          <strong>(15) Trade marks**</strong>
          <br />
          <br />
          HTML8PDF and our logo are trade marks belonging to us. We give no
          permission for the use of these trade marks, and such use may
          constitute an infringement of our rights. The other registered and
          unregistered trade marks or service marks on our website are the
          property of their respective owners. Unless stated otherwise, we do
          not endorse and are not affiliated with any of the holders of any such
          rights and as such we cannot grant any license to exercise such
          rights.
          <br />
          <br />
          <strong>(16) Competitions</strong>
          <br />
          <br />
          From time to time we may run competitions, free prize draws and/or
          other promotions on our website. These will be subject to separate
          terms and conditions (that we will make available to you as
          appropriate).
          <br />
          <br />
          <strong>(17) Variation</strong>
          <br />
          <br />
          We may revise these terms and conditions from time-to-time. Revised
          terms and conditions will apply to the use of our website from the
          date of the publication of the revised terms and conditions on our
          website.
          <br />
          <br />
          <strong>(18) Assignment</strong>
          <br />
          <br />
          You hereby agree that we may transfer, sub-contract or otherwise deal
          with any or all of our rights and/or obligations under these terms and
          conditions. You may not transfer, sub-contract or otherwise deal with
          your rights and/or obligations under these terms and conditions
          without obtaining our prior written consent.
          <br />
          <br />
          <strong>(19) Severability</strong>
          <br />
          <br />
          If a provision of these terms and conditions is determined by any
          court or other competent authority to be unlawful and/or
          unenforceable, the other provisions will continue in effect. If any
          unlawful and/or unenforceable provision would be lawful or enforceable
          if part of it were deleted, that part will be deemed to be deleted,
          and the rest of the provision will continue in effect.
          <br />
          <br />
          <strong>(20) Exclusion of third party rights</strong>
          <br />
          <br />
          The disclaimers, limitations of liability and exclusions of liability
          set out in Part A and Section 15 of these terms and conditions protect
          the following persons as they protect any other third party supplying
          templates or software services for distribution through this website.
          <br />
          Subject to the preceding paragraph, these terms and conditions are for
          the benefit of you and us, and are not intended to benefit any third
          party or be enforceable by any third party. The exercise of our and
          your rights in relation to these terms and conditions is not subject
          to the consent of any third party.
          <br />
          <br />
          <strong>(21) Entire agreement</strong>
          <br />
          <br />
          Subject to the first paragraph of Section 3, these terms and
          conditions, together with our privacy policy, constitute the entire
          agreement between you and us in relation to your use of our website,
          and supersede all previous agreements in respect of your use of this
          website.
          <br />
          <br />
          <strong>(22) Law and jurisdiction</strong>
          <br />
          <br />
          These terms and conditions will be governed by and construed in
          accordance with United States Federal law, and any disputes relating
          to these terms and conditions will be subject to the exclusive
          jurisdiction of the courts.
          <br />
          <br />
        </div>
      </div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem
            md={8}
            sm={8}
            className={classNames(
              classes.mlAuto,
              classes.mrAuto,
              classes.textCenter
            )}
          >
            <h1 className={classes.title}>PRIVACY POLICY</h1>
          </GridItem>
        </GridContainer>
      </div>

      <div className={classes.container}>
        <div>
          <h2 style={{ textAlign: "center", paddingTop: "10px" }}>
            <strong>HTML8PDF PRIVACY POLICY</strong>
          </h2>
          <br />
          <br />
          This Privacy Policy governs the manner in which HTML8PDF collects,
          uses, maintains and discloses information collected from users (each,
          a “User”) of the HTML8PDF.com website (“Site”). This privacy policy
          applies to the Site and all products and services offered by HTML8PDF
          <br />
          <br />
          <h3>
            <strong>Personal identification information</strong>
          </h3>
          <br />
          <br />
          We may collect personal identification information from Users in a
          variety of ways, including, but not limited to, when Users visit our
          site, subscribe to the newsletter, fill out a form, and in connection
          with other activities, services, features or resources we make
          available on our Site. Users may be asked for, as appropriate, name,
          email address, mailing address, phone number. Users may, however,
          visit our Site anonymously. We will collect personal identification
          information from Users only if they voluntarily submit such
          information to us. Users can always refuse to supply personally
          identification information, except that it may prevent them from
          engaging in certain Site related activities.
          <br />
          <br />
          <h3>
            <strong>Non-personal identification information</strong>
          </h3>
          <br />
          <br />
          We may collect non-personal identification information about Users
          whenever they interact with our Site. Non-personal identification
          information may include the browser name, the type of computer and
          technical information about Users means of connection to our Site,
          such as the operating system and the Internet service providers
          utilized and other similar information.
          <br />
          <br />
          <h3>
            <strong>Web browser cookies</strong>
          </h3>
          <br />
          <br />
          Our Site may use “cookies” to enhance User experience. User’s web
          browser places cookies on their hard drive for record-keeping purposes
          and sometimes to track information about them. User may choose to set
          their web browser to refuse cookies, or to alert you when cookies are
          being sent. If they do so, note that some parts of the Site may not
          function properly.
          <br />
          <br />
          <h3>
            <strong>How we use collected information</strong>
          </h3>
          <br />
          <br />
          HTML8PDF may collect and use Users personal information for the
          following purposes:
          <br />
          <br />
          <strong>• To improve customer service</strong>
          <br />
          Information you provide helps us respond to your customer service
          requests and support needs more efficiently.
          <br />
          <br />
          <strong>• To improve our Site</strong>
          <br />
          We may use feedback you provide to improve our products and services.
          <br />
          <br />
          <strong>• To send periodic emails</strong>
          <br />
          We may use the email address to send User information and updates
          pertaining to their order. It may also be used to respond to their
          inquiries, questions, and/or other requests. If User decides to opt-in
          to our mailing list, they will receive emails that may include company
          news, updates, related product or service information, etc. If at any
          time the User would like to unsubscribe from receiving future emails,
          we include detailed unsubscribe instructions at the bottom of each
          email.
          <br />
          <br />
          <h3>
            <strong>How we protect your information</strong>
          </h3>
          <br />
          <br />
          We adopt appropriate data collection, storage and processing practices
          and security measures to protect against unauthorized access,
          alteration, disclosure or destruction of your personal information,
          username, password, transaction information and data stored on our
          Site.
          <br />
          <br />
          <h3>
            <strong>Sharing your personal information</strong>
          </h3>
          <br />
          <br />
          We do not sell, trade, or rent Users personal identification
          information to others. We may share generic aggregated demographic
          information not linked to any personal identification information
          regarding visitors and users with our business partners, trusted
          affiliates and advertisers for the purposes outlined above.We may use
          third party service providers to help us operate our business and the
          Site or administer activities on our behalf, such as sending out
          newsletters or surveys. We may share your information with these third
          parties for those limited purposes provided that you have given us
          your permission.
          <br />
          <br />
          <h3>
            <strong>Third party websites</strong>
          </h3>
          <br />
          <br />
          Users may find advertising or other content on our Site that link to
          the sites and services of our partners, suppliers, advertisers,
          sponsors, licensors and other third parties. We do not control the
          content or links that appear on these sites and are not responsible
          for the practices employed by websites linked to or from our Site. In
          addition, these sites or services, including their content and links,
          may be constantly changing. These sites and services may have their
          own privacy policies and customer service policies. Browsing and
          interaction on any other website, including websites which have a link
          to our Site, is subject to that website’s own terms and policies.
          <br />
          <br />
          <h3>
            <strong>Changes to this privacy policy</strong>
          </h3>
          <br />
          <br />
          HTML8PDF has the discretion to update this privacy policy at any time.
          When we do, we will revise the updated date at the bottom of this
          page. We encourage Users to frequently check this page for any changes
          to stay informed about how we are helping to protect the personal
          information we collect. You acknowledge and agree that it is your
          responsibility to review this privacy policy periodically and become
          aware of modifications.
          <br />
          <br />
          <h3>
            <strong>Your acceptance of these terms</strong>
          </h3>
          <br />
          <br />
          By using this Site, you signify your acceptance of this policy. If you
          do not agree to this policy, please do not use our Site. Your
          continued use of the Site following the posting of changes to this
          policy will be deemed your acceptance of those changes.
          <br />
          <br />
          <h3>
            <strong>Contacting us</strong>
          </h3>
          <br />
          <br />
          If you have any questions about this Privacy Policy, the practices of
          this site, or your dealings with this site, please contact us at:
          <br />
          <br />
          HTML8PDF
          <br />
          3419 S River Road,
          <br />
          St. George, UT 84790
          <br />
          <br />
          Email: admin@HTML8PDF.com
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
