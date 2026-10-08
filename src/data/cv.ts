// Public CV shown at /cv/ and exported to /Mehmet-Oguzhan-Tor-CV.pdf.
// Deliberately leaves out home address and phone number.
export const cv = {
  name: 'Mehmet Oğuzhan Tor',
  title: 'Requirements & Systems Engineer · RF and Signal Processing',
  contact: [
    { label: 'Munich, Germany' },
    { label: 'mehmetoguzhantor@gmail.com', href: 'mailto:mehmetoguzhantor@gmail.com' },
    { label: 'linkedin.com/in/mehmet-oğuzhan-tor', href: 'https://www.linkedin.com/in/mehmet-o%C4%9Fuzhan-tor' },
    { label: 'mehmetoguzhantor.com', href: 'https://mehmetoguzhantor.com' },
  ],
  summary:
    'Requirements and systems engineer with a technical background in RF communication systems and digital signal processing. At Rohde & Schwarz, decomposes system-level requirements (L0–L4), writes testable functional and non-functional requirements and maintains traceability in Jama for a secure software-defined radio. Combines hands-on RF integration and test experience (3GPP 2G–5G) with DSP expertise, giving an end-to-end view from physical-layer behaviour up to formal system requirements. EU Blue Card holder in Germany.',
  experience: [
    {
      org: 'Rohde & Schwarz GmbH & Co. KG (via K-tronik GmbH)',
      place: 'Munich, Germany',
      roles: [
        {
          title: 'Requirements Engineer',
          when: 'Jul 2025 – Present',
          points: [
            'Decompose and refine stakeholder and system requirements across multiple subsystems of a secure software-defined radio through a structured L0–L4 hierarchy in Jama.',
            'Review requirements for measurability, testability and splitability; find gaps, ambiguities and conflicts and drive their resolution with stakeholders and developers.',
            'Author functional and non-functional requirements to established quality criteria; define tagging and NFR-categorisation conventions and maintain traceability across levels.',
            'Define acceptance criteria and verification methods so each requirement is traceable to its verification activity; prepare Jama baselines for formal reviews across the V-model lifecycle.',
          ],
        },
        {
          title: 'Software Integration and Test Engineer – RF Test Systems',
          when: 'Oct 2024 – Jun 2025',
          points: [
            'Integrated and validated RF subsystems for 3GPP cellular standards (2G–5G), including bring-up, acceptance and regression testing.',
            'Performed system-level debugging and root-cause analysis of HW/SW issues; created and tracked error reports.',
            'Developed automated Python test scripts to make regression and release testing faster.',
            'Operated spectrum analysers, signal generators and communication testers to evaluate performance against 3GPP requirements.',
          ],
        },
      ],
    },
    {
      org: 'Career transition: relocation to Germany',
      place: 'Turkey / Germany',
      roles: [
        {
          title: 'Self-directed projects and German language study',
          when: 'Jul 2023 – Sep 2024',
          points: [
            'Completed the relocation and German residence-visa process.',
            'Kept technical skills active through programming and data-analysis projects while studying German to A2.',
          ],
        },
      ],
    },
    {
      org: 'Anayurt Technology and Defense',
      place: 'Ankara, Turkey',
      roles: [
        {
          title: 'Digital Signal Processing Engineer',
          when: 'Jun 2021 – Jun 2023',
          points: [
            'Designed and optimised RF communication systems (HF, VHF, UHF), implementing demodulators for FSK and PSK signals.',
            'Analysed and classified radar signals, applying DSP techniques to estimate bandwidth, modulation type, frequency range and symbol rate.',
            'Used MATLAB/Simulink for algorithm development, testing and validation.',
            'Supported the development of an advanced UAV control system, focusing on flight-control algorithms and autonomous operation.',
          ],
        },
      ],
    },
    {
      org: 'ATEL Technology and Defense Industry Inc.',
      place: 'Ankara, Turkey',
      roles: [{ title: 'R&D Intern', when: 'Summer 2020', points: ['Contributed to hardware component optimisation (CPUs, displays, jammers).'] }],
    },
    {
      org: 'Türk Telekom Inc.',
      place: 'Ankara, Turkey',
      roles: [{ title: 'MPLS and Transmission Intern', when: 'Summer 2019', points: ['Assisted in operating and maintaining MPLS and DSLAM-based transmission systems.'] }],
    },
  ],
  education: [
    {
      org: 'Bilkent University',
      place: 'Ankara, Turkey',
      title: 'B.Sc. Electrical and Electronics Engineering',
      when: 'Jun 2022',
      note: 'Taught entirely in English.',
    },
  ],
  projects: [
    { title: 'Autonomous UAV – energy optimisation', when: 'TÜBİTAK UAV Turkey contest, 2019', text: 'Designed and built a UAV that completed its mission tasks autonomously; optimised energy efficiency and flight performance through pitch, yaw and roll control; designed subsystems and coordinated manufacturing.' },
    { title: 'Spoken number recognition', when: 'FPGA, VHDL, BASYS3', text: 'Real-time spoken-digit recognition with the signal processing implemented on FPGA.' },
    { title: 'Mini theremin', when: 'FPGA, HC-SR04', text: 'Touchless instrument: an ultrasonic distance sensor controls the pitch generated on the FPGA.' },
    { title: 'Further projects', when: 'Python, MATLAB, Raspberry Pi', text: 'Smart-house system with an Android app, digit recognition in MATLAB, and machine-learning classifiers in Python.' },
  ],
  skills: [
    { h: 'Requirements & systems', p: 'L0–L4 decomposition, functional and non-functional requirements, measurability, testability, traceability, acceptance criteria, baselining, V-model, Jama' },
    { h: 'RF & test', p: 'Spectrum analysers, signal generators, communication testers, RF subsystem integration and validation, regression and release testing, 3GPP 2G–5G' },
    { h: 'Programming', p: 'Python (automation, test scripting), MATLAB/Simulink, C++, VHDL, JavaScript' },
    { h: 'Tools & platforms', p: 'Jama, Git, VS Code, Xilinx Vivado, FPGA (BASYS3), Raspberry Pi, Arduino, Android Studio' },
  ],
  languages: 'Turkish (native) · English (fluent) · German (B1 in progress)',
  certifications: 'Google Data Analytics (Coursera)',
  activities: 'IEEE Bilkent University Student Branch, Vice Chair (2018–2020): led a UAV project from concept to prototype.',
};
