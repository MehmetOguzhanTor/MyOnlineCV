// Public CV shown at /cv/ and exported to /Mehmet-Oguzhan-Tor-CV.pdf.
// Mirrors the master application CV (Is_Arama/Basvurular/Ortak_Belgeler, 26 Oct 2026)
// but deliberately leaves out home address and phone number, and keeps the
// defence programme description generic.
export const cv = {
  name: 'Mehmet Oğuzhan Tor',
  title: 'Requirements & Systems Engineer · RF Test · DSP',
  contact: [
    { label: 'Munich, Germany' },
    { label: 'mehmetoguzhantor@gmail.com', href: 'mailto:mehmetoguzhantor@gmail.com' },
    { label: 'linkedin.com/in/mehmet-oguzhan-tor', href: 'https://www.linkedin.com/in/mehmet-oguzhan-tor' },
    { label: 'mehmetoguzhantor.com', href: 'https://mehmetoguzhantor.com' },
  ],
  status: 'EU Blue Card holder (Germany): full work rights, no visa sponsorship required · Available immediately',
  summary:
    'Electrical engineer with about four years of experience in defence and telecommunications, spanning the full path from physical-layer signal processing to formal system requirements. At Rohde & Schwarz, owned requirements engineering for a secure software-defined radio (L0–L4 decomposition, verifiable functional and non-functional requirements, traceability and baselines in Jama across the V-model), after a year integrating and validating 2G–5G RF test subsystems with Python test automation. Previously developed FSK/PSK demodulators and radar signal analysis methods as a DSP engineer in MATLAB/Simulink.',
  experience: [
    {
      org: 'Rohde & Schwarz GmbH & Co. KG (via K-tronik GmbH)',
      place: 'Munich, Germany',
      roles: [
        {
          title: 'Requirements Engineer',
          when: 'Jul 2025 – Oct 2026',
          points: [
            'Decomposed stakeholder and system requirements across multiple subsystems of a secure software-defined radio through a structured L0–L4 hierarchy in Jama, authoring atomic, unambiguous and verifiable functional and non-functional requirements with documented rationale and design constraints.',
            'Led requirement review and clarification sessions with stakeholders, domain experts and developers; challenged requirements for measurability, testability and splitability and drove the resolution of gaps and conflicts (e.g. unbounded timing constraints, undefined interface content).',
            'Defined acceptance criteria and verification methods for each requirement and maintained end-to-end traceability across requirement levels and to the corresponding verification activities of the test team.',
            'Defined tagging and NFR-categorisation conventions and prepared Jama baselines ahead of formal review cycles, coordinating with systems, hardware and test engineers across the V-model lifecycle.',
          ],
        },
        {
          title: 'Software Integration and Test Engineer – RF Test Systems',
          when: 'Oct 2024 – Jun 2025',
          points: [
            'Integrated and validated RF subsystems for 3GPP cellular standards (2G–5G), including bring-up, acceptance and regression testing.',
            'Performed system-level debugging and root-cause analysis of HW/SW issues; created and tracked error reports.',
            'Developed automated Python test scripts to improve regression and release-testing efficiency.',
            'Operated RF measurement equipment (spectrum analysers, signal generators, communication testers) to evaluate system performance against 3GPP requirements.',
          ],
        },
      ],
    },
    {
      org: 'Career break: relocation to Germany',
      place: 'Turkey / Germany',
      roles: [{ title: 'German language studies (A2)', when: 'Jul 2023 – Sep 2024', points: [] }],
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
            'Performed radar signal analysis and classification, applying DSP techniques to evaluate bandwidth, modulation type, frequency range and symbol rate.',
            'Used MATLAB/Simulink for algorithm development, testing and validation of signal processing methods.',
            'Supported the development of an advanced UAV control system, focusing on flight-control algorithms and autonomous operation.',
          ],
        },
      ],
    },
    {
      org: 'Internships',
      place: 'Ankara, Turkey',
      roles: [
        {
          title: 'ATEL Technology and Defense: R&D Intern (2020) · Türk Telekom: MPLS & Transmission Intern (2019)',
          when: '2019 – 2020',
          points: [],
        },
      ],
    },
  ],
  education: [
    {
      org: 'Bilkent University',
      place: 'Ankara, Turkey',
      title: 'B.Sc. Electrical and Electronics Engineering',
      when: 'Jun 2022',
      note: 'Taught in English.',
    },
  ],
  projects: [
    { title: 'UAV – energy optimisation', when: 'TÜBİTAK UAV Contest, 2019', text: 'Autonomous mission UAV; pitch/yaw/roll control for energy efficiency; subsystem design and modelling.' },
    { title: 'Spoken number recognition', when: 'FPGA, VHDL, BASYS3', text: 'Real-time recognition of spoken digits on an FPGA.' },
  ],
  skills: [
    { h: 'Requirements & systems', p: 'L0–L4 decomposition, functional and non-functional requirements, requirement quality (measurability, testability, traceability), verification methods and acceptance criteria, stakeholder reviews, baselining and review preparation, V-model, Jama' },
    { h: 'RF & test systems', p: 'Spectrum analysers, signal generators, communication testers; RF subsystem integration and validation; bring-up, acceptance, regression and release testing; HW/SW root-cause analysis; 3GPP 2G–5G' },
    { h: 'Signal processing', p: 'FSK/PSK demodulation, radar signal analysis and classification (bandwidth, modulation, symbol rate), algorithm development and validation in MATLAB/Simulink' },
    { h: 'Programming', p: 'Python (test automation, scripting, data analysis), MATLAB/Simulink, C++, VHDL, JavaScript' },
    { h: 'Tools', p: 'Jama, Git, VS Code, Xilinx Vivado, FPGA (BASYS3), Raspberry Pi, Arduino, Android Studio' },
  ],
  languages: 'Turkish (native) · English (fluent) · German (A2; B1 in progress)',
  certifications: 'Google Data Analytics (Coursera)',
  activities: 'IEEE Bilkent University Student Branch, Vice Chair (2018–2020), UAV project lead',
};
