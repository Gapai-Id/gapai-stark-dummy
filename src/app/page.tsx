'use client'

import { useState } from 'react'
import RegisterCredentials from '@/components/screens/RegisterCredentials'
import RegisterOTP from '@/components/screens/RegisterOTP'
import RegisterDemographics from '@/components/screens/RegisterDemographics'
import RegisterSuccess from '@/components/screens/RegisterSuccess'
import DashboardPreAssessment from '@/components/screens/DashboardPreAssessment'
import DashboardJaKerSelection from '@/components/screens/DashboardJaKerSelection'
import DashboardAssessmentFresh from '@/components/screens/DashboardAssessmentFresh'
import DashboardAssessmentResume from '@/components/screens/DashboardAssessmentResume'
import DashboardInTraining from '@/components/screens/DashboardInTraining'
import DashboardInTrainingEnrolled from '@/components/screens/DashboardInTrainingEnrolled'
import DashboardInTrainingRetakeUnlocked from '@/components/screens/DashboardInTrainingRetakeUnlocked'
import TrainingList from '@/components/screens/TrainingList'
import TrainingDetail from '@/components/screens/TrainingDetail'
import TrainingEnrollSummary from '@/components/screens/TrainingEnrollSummary'
import TrainingStatus from '@/components/screens/TrainingStatus'
import DashboardActivation from '@/components/screens/DashboardActivation'
import DashboardPrePipelineA from '@/components/screens/DashboardPrePipelineA'
import DashboardPrePipelineB from '@/components/screens/DashboardPrePipelineB'
import DashboardPrePipelineC from '@/components/screens/DashboardPrePipelineC'
import DashboardPrePipelineD from '@/components/screens/DashboardPrePipelineD'
import DashboardPipeline from '@/components/screens/DashboardPipeline'
import DashboardDeparture from '@/components/screens/DashboardDeparture'
import DashboardStandbyActive from '@/components/screens/DashboardStandbyActive'
import DashboardStandbyJeda from '@/components/screens/DashboardStandbyJeda'
import DashboardAlumni from '@/components/screens/DashboardAlumni'
import JaKerDetail from '@/components/screens/JaKerDetail'
import DocumentTracker from '@/components/screens/DocumentTracker'
import Profile from '@/components/screens/Profile'
import PipelineOverview from '@/components/screens/PipelineOverview'
import FunnelAcceptanceGate from '@/components/screens/FunnelAcceptanceGate'
import FunnelInfoSession from '@/components/screens/FunnelInfoSession'
import FunnelPayment from '@/components/screens/FunnelPayment'
import FunnelInterviewPrep from '@/components/screens/FunnelInterviewPrep'
import AktivitasPersiapan from '@/components/screens/AktivitasPersiapan'
import AktivitasAcara from '@/components/screens/AktivitasAcara'
import AktivitasAlumni from '@/components/screens/AktivitasAlumni'
import TrackDetailVisa from '@/components/screens/TrackDetailVisa'
import TrackDetailMedical from '@/components/screens/TrackDetailMedical'
import TrackDetailJobDocs from '@/components/screens/TrackDetailJobDocs'
import TrackDetailDeparture from '@/components/screens/TrackDetailDeparture'
import AlumniStoryComposer from '@/components/screens/AlumniStoryComposer'
import AlumniStoryDetail from '@/components/screens/AlumniStoryDetail'
import StreakDetail from '@/components/screens/StreakDetail'
import Login from '@/components/screens/Login'
import ForgotPassword from '@/components/screens/ForgotPassword'
import ForgotPasswordOTP from '@/components/screens/ForgotPasswordOTP'
import ForgotPasswordNew from '@/components/screens/ForgotPasswordNew'
import SettingsEditProfile from '@/components/screens/SettingsEditProfile'
import SettingsDemographicsDomicile from '@/components/screens/SettingsDemographicsDomicile'
import SettingsCertifications from '@/components/screens/SettingsCertifications'
import SettingsCertificationsAdd from '@/components/screens/SettingsCertificationsAdd'
import SettingsNotifications from '@/components/screens/SettingsNotifications'
import SettingsPrivacySecurity from '@/components/screens/SettingsPrivacySecurity'
import SettingsAppLanguage from '@/components/screens/SettingsAppLanguage'
import ModalConfirmJaKerChange from '@/components/screens/ModalConfirmJaKerChange'
import ModalConfirmDeclineMatch from '@/components/screens/ModalConfirmDeclineMatch'
import ModalConfirmJedaMode from '@/components/screens/ModalConfirmJedaMode'
import ModalTimGapaiChat from '@/components/screens/ModalTimGapaiChat'
import ModalConfirmDestructive from '@/components/screens/ModalConfirmDestructive'
import ErrorOTPRetryExhausted from '@/components/screens/ErrorOTPRetryExhausted'
import ErrorTrackFailure from '@/components/screens/ErrorTrackFailure'
import EmptyStateNoActivities from '@/components/screens/EmptyStateNoActivities'
import EmptyStateNoDocuments from '@/components/screens/EmptyStateNoDocuments'
import EmptyStateNoStories from '@/components/screens/EmptyStateNoStories'
import EmptyStateNoPipeline from '@/components/screens/EmptyStateNoPipeline'
import ErrorNetworkError from '@/components/screens/ErrorNetworkError'
import Error404 from '@/components/screens/Error404'
import ErrorServerError from '@/components/screens/ErrorServerError'
import AssessmentEntryBriefing from '@/components/screens/AssessmentEntryBriefing'
import AssessmentLanguageQuestion from '@/components/screens/AssessmentLanguageQuestion'
import AssessmentMidTransition from '@/components/screens/AssessmentMidTransition'
import AssessmentSkillQuestion from '@/components/screens/AssessmentSkillQuestion'
import AssessmentResultPass from '@/components/screens/AssessmentResultPass'
import AssessmentResultFail from '@/components/screens/AssessmentResultFail'
import PreAssessmentEligibilityGate from '@/components/screens/PreAssessmentEligibilityGate'
import PreAssessmentBlocked from '@/components/screens/PreAssessmentBlocked'
import PreAssessmentDestination from '@/components/screens/PreAssessmentDestination'
import PreAssessmentStep1 from '@/components/screens/PreAssessmentStep1'
import PreAssessmentStep2 from '@/components/screens/PreAssessmentStep2'
import PreAssessmentStep3 from '@/components/screens/PreAssessmentStep3'
import PreAssessmentLanguage from '@/components/screens/PreAssessmentLanguage'
import PreAssessmentEducation from '@/components/screens/PreAssessmentEducation'
import PreAssessmentBasicInfo from '@/components/screens/PreAssessmentBasicInfo'
import PreAssessmentMentalHealth from '@/components/screens/PreAssessmentMentalHealth'
import PreAssessmentResults from '@/components/screens/PreAssessmentResults'
import PreAssessmentPhysicalConditions from '@/components/screens/PreAssessmentPhysicalConditions'
import PreAssessmentResultsFlow from '@/components/screens/PreAssessmentResultsFlow'
import DashboardPreAssessmentInProgress from '@/components/screens/DashboardPreAssessmentInProgress'
import DashboardPreAssessmentInProgressNoNav from '@/components/screens/DashboardPreAssessmentInProgressNoNav'
import ComingSoon from '@/components/screens/ComingSoon'

const screens = [
  { id: 'R-01', name: 'Register Credentials (R-01)', component: RegisterCredentials },
  { id: 'R-02', name: 'Register OTP (R-02)', component: RegisterOTP },
  { id: 'R-03', name: 'Register Demographics (R-03)', component: RegisterDemographics },
  { id: 'R-04', name: 'Register Success (R-04)', component: RegisterSuccess },
  { id: 'D-S1', name: 'Dashboard Pre-Assessment (D-S1)', component: DashboardPreAssessment },
  { id: 'D-S1b', name: 'Dashboard PA In Progress (D-S1b)', component: DashboardPreAssessmentInProgress },
  { id: 'D-S1b-alt', name: 'Dashboard PA In Progress — No Nav (D-S1b-alt)', component: DashboardPreAssessmentInProgressNoNav },
  { id: 'D-S2', name: 'Dashboard JaKer Selection (D-S2)', component: DashboardJaKerSelection },
  { id: 'D-S3-fresh', name: 'Dashboard Assessment Fresh (D-S3-fresh)', component: DashboardAssessmentFresh },
  { id: 'D-S3-resume', name: 'Dashboard Assessment Resume (D-S3-resume)', component: DashboardAssessmentResume },
  { id: 'D-S4a', name: 'Dashboard In Training — Belum Enroll (D-S4a)', component: DashboardInTraining },
  { id: 'D-S4b', name: 'Dashboard In Training — Enrolled (D-S4b)', component: DashboardInTrainingEnrolled },
  { id: 'D-S4c', name: 'Dashboard In Training — Retake Unlocked (D-S4c)', component: DashboardInTrainingRetakeUnlocked },
  { id: 'TRV-01', name: 'Training List (TRV-01)', component: TrainingList },
  { id: 'TRV-02', name: 'Training Detail (TRV-02)', component: TrainingDetail },
  { id: 'TRV-03', name: 'Training Enrollment Summary (TRV-03)', component: TrainingEnrollSummary },
  { id: 'TRV-04', name: 'Training Status Post-Payment (TRV-04)', component: TrainingStatus },
  { id: 'D-S5a', name: 'Dashboard Activation (D-S5a)', component: DashboardActivation },
  { id: 'D-S5b-A', name: 'Dashboard Pre-Pipeline A (D-S5b-A)', component: DashboardPrePipelineA },
  { id: 'D-S5b-B', name: 'Dashboard Pre-Pipeline B (D-S5b-B)', component: DashboardPrePipelineB },
  { id: 'D-S5b-C', name: 'Dashboard Pre-Pipeline C (D-S5b-C)', component: DashboardPrePipelineC },
  { id: 'D-S5b-D', name: 'Dashboard Pre-Pipeline D (D-S5b-D)', component: DashboardPrePipelineD },
  { id: 'D-S5c', name: 'Dashboard Pipeline (D-S5c)', component: DashboardPipeline },
  { id: 'D-S5d', name: 'Dashboard Departure (D-S5d)', component: DashboardDeparture },
  { id: 'D-S6-active', name: 'Dashboard Standby Active (D-S6-active)', component: DashboardStandbyActive },
  { id: 'D-S6-jeda', name: 'Dashboard Standby Jeda (D-S6-jeda)', component: DashboardStandbyJeda },
  { id: 'D-S7-active', name: 'Dashboard Alumni (D-S7-active)', component: DashboardAlumni },
  { id: 'JD-01', name: 'JaKer Detail (JD-01)', component: JaKerDetail },
  { id: 'DT-01', name: 'Document Tracker (DT-01)', component: DocumentTracker },
  { id: 'P-01', name: 'Pipeline Overview (P-01)', component: PipelineOverview },
  { id: 'PR-01', name: 'Profile (PR-01)', component: Profile },
  { id: 'F-01', name: 'Funnel Acceptance Gate (F-01)', component: FunnelAcceptanceGate },
  { id: 'F-02', name: 'Funnel Info Session (F-02)', component: FunnelInfoSession },
  { id: 'F-03', name: 'Funnel Payment (F-03)', component: FunnelPayment },
  { id: 'F-04', name: 'Funnel Interview Prep (F-04)', component: FunnelInterviewPrep },
  { id: 'AK-01', name: 'Aktivitas Persiapan (AK-01)', component: AktivitasPersiapan },
  { id: 'AK-02', name: 'Aktivitas Acara (AK-02)', component: AktivitasAcara },
  { id: 'AK-03', name: 'Aktivitas Alumni (AK-03)', component: AktivitasAlumni },
  { id: 'TR-01', name: 'Track Detail Visa (TR-01)', component: TrackDetailVisa },
  { id: 'TR-02', name: 'Track Detail Medical (TR-02)', component: TrackDetailMedical },
  { id: 'TR-03', name: 'Track Detail Job Docs (TR-03)', component: TrackDetailJobDocs },
  { id: 'TR-04', name: 'Track Detail Departure (TR-04)', component: TrackDetailDeparture },
  { id: 'AL-01', name: 'Alumni Story Composer (AL-01)', component: AlumniStoryComposer },
  { id: 'AL-02', name: 'Alumni Story Detail (AL-02)', component: AlumniStoryDetail },
  { id: 'STREAK-01', name: 'Streak Detail (STREAK-01)', component: StreakDetail },
  { id: 'L-01', name: 'Login (L-01)', component: Login },
  { id: 'L-02', name: 'Forgot Password (L-02)', component: ForgotPassword },
  { id: 'L-03', name: 'Forgot Password OTP (L-03)', component: ForgotPasswordOTP },
  { id: 'L-04', name: 'New Password (L-04)', component: ForgotPasswordNew },
  { id: 'S-01', name: 'Settings Edit Profile (S-01)', component: SettingsEditProfile },
  { id: 'S-02', name: 'Settings Demographics (S-02)', component: SettingsDemographicsDomicile },
  { id: 'S-03', name: 'Settings Certifications (S-03)', component: SettingsCertifications },
  { id: 'S-03a', name: 'Settings Add Certification (S-03a)', component: SettingsCertificationsAdd },
  { id: 'S-04', name: 'Settings Notifications (S-04)', component: SettingsNotifications },
  { id: 'S-05', name: 'Settings Privacy (S-05)', component: SettingsPrivacySecurity },
  { id: 'S-06', name: 'Settings Language (S-06)', component: SettingsAppLanguage },
  { id: 'M-01', name: 'Modal Confirm JaKer Change (M-01)', component: ModalConfirmJaKerChange },
  { id: 'M-02', name: 'Modal Confirm Decline Match (M-02)', component: ModalConfirmDeclineMatch },
  { id: 'M-03', name: 'Modal Confirm Jeda Mode (M-03)', component: ModalConfirmJedaMode },
  { id: 'M-04', name: 'Modal Tim Gapai Chat (M-04)', component: ModalTimGapaiChat },
  { id: 'M-05', name: 'Modal Confirm Destructive (M-05)', component: ModalConfirmDestructive },
  { id: 'E-01', name: 'Error OTP Retry Exhausted (E-01)', component: ErrorOTPRetryExhausted },
  { id: 'E-02', name: 'Error Track Failure (E-02)', component: ErrorTrackFailure },
  { id: 'E-03', name: 'Empty State No Activities (E-03)', component: EmptyStateNoActivities },
  { id: 'E-04', name: 'Empty State No Documents (E-04)', component: EmptyStateNoDocuments },
  { id: 'E-05', name: 'Empty State No Stories (E-05)', component: EmptyStateNoStories },
  { id: 'E-06', name: 'Empty State No Pipeline (E-06)', component: EmptyStateNoPipeline },
  { id: 'E-07', name: 'Error Network (E-07)', component: ErrorNetworkError },
  { id: 'E-08', name: 'Error 404 (E-08)', component: Error404 },
  { id: 'E-09', name: 'Error Server 500 (E-09)', component: ErrorServerError },
  { id: 'AS-01', name: 'Assessment Entry Briefing (AS-01)', component: AssessmentEntryBriefing },
  { id: 'AS-02', name: 'Assessment Language Question (AS-02)', component: AssessmentLanguageQuestion },
  { id: 'AS-03', name: 'Assessment Mid-Transition (AS-03)', component: AssessmentMidTransition },
  { id: 'AS-04', name: 'Assessment Skill Question (AS-04)', component: AssessmentSkillQuestion },
  { id: 'AS-05', name: 'Assessment Result Pass (AS-05)', component: AssessmentResultPass },
  { id: 'AS-06', name: 'Assessment Result Fail (AS-06)', component: AssessmentResultFail },
  { id: 'PA-01', name: 'Pre-Assessment Eligibility Gate (PA-01)', component: PreAssessmentEligibilityGate },
  { id: 'PA-02', name: 'Pre-Assessment Blocked (PA-02)', component: PreAssessmentBlocked },
  { id: 'PA-03', name: 'Pre-Assessment Destination (PA-03)', component: PreAssessmentDestination },
  { id: 'PA-04', name: 'Pre-Assessment Experience + Industry (PA-04)', component: PreAssessmentStep1 },
  { id: 'PA-05', name: 'Pre-Assessment Skills (PA-05)', component: PreAssessmentStep2 },
  { id: 'PA-06', name: 'Pre-Assessment Tools (PA-06)', component: PreAssessmentStep3 },
  { id: 'PA-07', name: 'Pre-Assessment Language (PA-07)', component: PreAssessmentLanguage },
  { id: 'PA-08', name: 'Pre-Assessment Education (PA-08)', component: PreAssessmentEducation },
  { id: 'PA-09', name: 'Pre-Assessment Physical Data (PA-09)', component: PreAssessmentBasicInfo },
  { id: 'PA-10', name: 'Pre-Assessment Mental Health (PA-10)', component: PreAssessmentMentalHealth },
  { id: 'PA-11', name: 'Pre-Assessment Mental Health → Results → Physical (Flow)', component: PreAssessmentResultsFlow },
  { id: 'PA-11-standalone', name: 'Pre-Assessment Results standalone (PA-11)', component: PreAssessmentResults },
  { id: 'PA-12', name: 'Pre-Assessment Physical Conditions Gate (PA-12)', component: PreAssessmentPhysicalConditions },
  { id: 'CS-01', name: 'Coming Soon (CS-01)', component: ComingSoon },
]

export default function PrototypePage() {
  const [currentScreen, setCurrentScreen] = useState('D-S1')

  const CurrentScreen = screens.find(s => s.id === currentScreen)?.component ?? DashboardPreAssessment

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-4 pb-[60px]">
      {/* Phone frame */}
      <div className="w-[375px] bg-white shadow-xl rounded-3xl overflow-hidden">
        <CurrentScreen />
      </div>

      {/* Navigator — sticky at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="max-w-[375px] mx-auto px-3 py-2 flex items-center gap-2">
          <p className="text-[10px] text-gray-400 whitespace-nowrap">Screen Navigator</p>
          <select
            value={currentScreen}
            onChange={(e) => setCurrentScreen(e.target.value)}
            className="flex-1 px-2 py-1.5 text-xs border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#118A6D]"
          >
            {screens.map(screen => (
              <option key={screen.id} value={screen.id}>
                {screen.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
