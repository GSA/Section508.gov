---
layout: page
sidenav: true
permalink: manage/track-report-conformance/
type: manage
title: 'Track and Report Conformance'
created: 1527568792
topic: Manage (program)
sub-topic: Manage a 508 Program
audience:
- 508 Program Manager (508pm)
- Website Managers/Content Managers (wcm)
- Information Technology Program and Project Managers (itpm)
- Chief Information Officer (cio)
- Developers and Testers (dev-test)
resource-type: Long form article
format: HTML (html)
---

Drive incremental improvement by measuring and reporting 508 conformance issues.

## Test Reports

At their very best, automated scanning tools currently only cover 30%-35% of accessibility requirements. Until test coverage dramatically improves, results from automated scanning tools should never be represented as “508 compliance results.” Rather, they should be used and consistently communicated to agency stakeholders as risk monitoring mechanisms, where reported test results indicate potential accessibility issues.

It is generally better to create conformance reports using manual test results, especially if they are well documented and based on normative testing using the guidance provided by the CIO Council Accessibility Community of Practice. Augmentation with automated testing results may be acceptable if the automated test rule sets have been validated for accuracy before running the tests.

## Legacy Content

 [Section E202.2 of the Revised 508 Standards][1] provide an exception for legacy content:

  * “Any component or portion of existing ICT that complies with an earlier standard issued pursuant to Section 508 of the Rehabilitation Act of 1973, as amended, and that has not been altered on or after January 18, 2018, shall not be required to be modified to conform to the Revised 508 Standards.”

This new exception presents several challenges from a monitoring perspective:

  * How can your agency know which electronic content, or what component or portion of content, conformed to the [Original 508 Standards?][2]
  * How can your agency know if any conforming “components or portions” were changed or revised on or after January 18, 2018?
  * How can your agency track and monitor which electronic content does not need to conform to the [Revised 508 Standards][3]?

Suggestions to address these challenges include:

  * If you already have tracking mechanisms in place that record compliance levels (and preferably test results) for individual electronic content assets before January 18, 2018, identify those that fully conform to the Original 508 Standards.
  * Where applicable, use metadata to identify legacy content as conformant under the Original 508 Standards. Configure your automated scanning tool to bypass any legacy content that contains this tag and has a “last updated” date prior to January 18, 2018. If your scanning tool does not have this capability and you are unable to find another way to exclude the legacy content from the scan, let the tool scan all the content with the understanding that the scanning tool is only designed to provide an indication of accessibility issues – it is not a proxy for determining legal compliance.
  * If the legacy content is not posted to the web (or cannot be tested by your automated scanning tool), integrate information about conforming legacy content into compliance reports. If the date last updated for the legacy content is on or after January 18, 2018, test the content against the Revised 508 Standards. Determine if there are components or portions of the legacy content that do not need to conform to the Revised 508 Standards. Make a case-by-case determination of remediation needed to mitigate compliance risk for “legacy” assets.
  * If you have previously scanned legacy content and did not identify any issues, do not automatically assume this exception applies. Scanning tools can only provide limited test coverage against the 508 Standards (Original or Revised). Only comprehensive manual testing can validate full conformance with either standard.
  * If you have not manually tested your legacy content (or have no testing records), there is no way to tell whether it can fall under this exception. Consider testing this legacy content using the Revised 508 Standards to establish a baseline for potential accessibility risk.
  * When compiling your overall reports for key stakeholders, include results from the “previously conforming legacy content” with the results from the automated tool, and any other manual test results based on the Revised 508 Standards.
  * To distinguish conforming legacy content from non-conforming legacy content, keep automated test results separate from manual test results.

## Public Facing Content

  * Identifying what public facing electronic content you need to track is generally easier when the content is posted to the web. Since all public facing content is covered under [Section E205 - Electronic Content][4], there is no need to distinguish between content that is, and is not, covered by the standards when configuring scanning tools.
  * An agency that has a robust policy and dedicated resources can require authors or content managers to manually record testing results in a central repository, from which results can be incorporated into overall agency tracking reports and dashboards.
  * For content posted on the web, develop conformance reports that identify the current level of conformance of each type of electronic content, sorted by responsible component, with drill-down options to individual websites or content assets when feasible. This will require combining automated and manual test results, and it is advised to gradually try both types of testing to figure out what works best.
  * For public facing content that is not posted to the web (e.g., information screens on kiosks in waiting areas), identify who is responsible for creating and publishing this content, as well as the content lifecycle for publication and ongoing monitoring. Establish responsibilities for 508 testing and identify a method to track, test, and monitor results.

## Non-Public Facing Content

  * While many of the above challenges and approaches apply to tracking and reporting internal content (particularly when it is deployed on the web), there is the additional challenge of tracking whether non-public facing electronic content falls under at least one of the scoping categories in [Section E205][4].
  * Agencies with much higher levels of risk (those that serve a large segment of the public, or with a large number of employees with disabilities) may need a tracking system (e.g., a way to record due diligence and compliance against specific documents, notifications, PDF fillable forms, multimedia content publications, etc.). For instance, some agencies provide fillable PDF forms to employees and members of the public, and the authors of these forms should record information such as manual testing results, and when and by whom the forms were tested. An agency with a robust policy and dedicated resources can require authors or gatekeepers to manually record testing results in a central repository. A 508 program can establish a custom web application or a simple tracking tool using a content management system to keep track of testing results.
  * While the process sounds labor intensive, and at first it is, customized tracking tools can streamline the process by including an automated script to scan the network to determine if content is still there, or if the content has been updated since the last testing record.

## Related Resources

  * [Build Support for Accessible Content][5] - Follow the stages of content production to ensure your organization publishes accessible content.

This guidance was developed by the U.S. Federal Government Revised 508 Standards Transition Workgroup. Members include the U.S. Federal CIO Council Accessibility Community of Practice, the U.S. Access Board, and the General Services Administration.


**Reviewed/Updated:** May 2018

 [1]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#E202-general-exceptions
 [2]: https://www.federalregister.gov/documents/2000/12/21/00-32017/electronic-and-information-technology-accessibility-standards
 [3]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines
 [4]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#E205-content
 [5]: {{site.baseurl}}/manage/support-accessible-content