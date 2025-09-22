import { Fragment, useEffect, useRef } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Header from './Components/Includes/Header'
import Footer from './Components/Includes/Footer'
import Test from './Components/Test/Test'
import TestDetails from './Components/Containers/TestDetails'
import CartList from './Components/Containers/CartList'
import AlertBox from './AlertBox'
import GuestCheckOut from './Components/Containers/GuestCheckOut'
import Login from './Components/Containers/Login'
import OtpLogin from './Components/Containers/OtpLogin'
import VerifyLogin from './Components/Containers/VerifyLogin'
import Register from './Components/Containers/Register'

// -------------------------------------------------------//

import Home from './Components/Home/Home'
import About from './Components/About/About'
import Peoplebhind from './Components/Peoplebehind/Peoplebehind'
import History from './Components/History/History'
import Commitment from './Components/Commitment/Commitment'
import Accreditation from './Components/Accreditation/Accreditation'
import PatientsConsumers from './Components/PatientsConsumers/PatientsConsumers'
import Packages from './Components/Packages/Packages'
import PackagesAds from './Components/PackagesAds/PackagesAds'
import Loader from './Components/Loader/Loader'
// import HealthPackages from './Components/HealthPackages/HealthPackages'
import PreparingForHeathCheckup from './Components/PreparingForHeathCheckup/PreparingForHeathCheckup'
import DriveThroughBloodCollection from './Components/DriveThroughBloodCollection/DriveThroughBloodCollection'
import Feedback from './Components/Feedback/Feedback'
import Faq from './Components/Faq/Faq'
import BookanAppointment from './Components/BookanAppointment/BookanAppointment'
import Department from './Components/Department/Department'
import HospitalLabManagement from './Components/HospitalLabManagement/HospitalLabManagement'
import ClinicalLabManagement from './Components/ClinicalLabManagement/ClinicalLabManagement'
import FranchisingOpportunities from './Components/FranchisingOpportunities/FranchisingOpportunities'
import Research from './Components/Research/Research'
import Physiotherapy from './Components/Physiotherapy/Physiotherapy'
import ManualTherapy from './Components/ManualTherapy/ManualTherapy'
import ExerciseTherapy from './Components/ExerciseTherapy/ExerciseTherapy'
import Electrotherapy from './Components/Electrotherapy/Electrotherapy'
import Contact from './Components/Contact/Contact'
import HeadOffice from './Components/HeadOffice/HeadOffice'
import AnandLabFranchise from './Components/AnandLabFranchise/AnandLabFranchise'
import CovidtestingforEmployees from './Components/CovidtestingforEmployees/CovidtestingforEmployees'
import HealthCheckupforEmployees from './Components/HealthCheckupforEmployees/HealthCheckupforEmployees'
import CaptainHealthCheck from './Components/CaptainHealthCheck/CaptainHealthCheck'
import CaptainHealth from './Components/CaptainHealth/CaptainHealth'
import Careers from './Components/Careers/Careers'
import Career from './Components/Career/Career'
import MyProfile from './Components/MyProfile/MyProfile'
import FindLab from './Components/FindLab/FindLab'
import ThankYou from './Components/ThankYou/ThankYou'
import AnandThankYou from './Components/ThankYou/AnandThankYou'

import CancellationPolicy from './Components/CancellationPolicy/CancellationPolicy'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import TermsConditions from './Components/TermsConditions/TermsConditions'
import AnandatHome from './Components/AnandatHome/AnandatHome'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUser, setTestLocation } from './Redux/Actions/TestAction'
import "react-datepicker/dist/react-datepicker.css";
import ForgotPassword from './Components/Containers/ForgotPassword'
import ResetPassword from './Components/Containers/ResetPassword'
import { QueryClient, QueryClientProvider } from 'react-query'
import FloatingForm from './Components/FloatingForm'
import AuthRoutes from './Components/AuthRoutes'
import Reports from './Components/Reports'
import ReportAccount from './Components/ReportAccount'
import CallToAction from './Components/CallToAction'
import FeedbackB2B from './Components/Feedback/FeedbackB2B'
import AnandatHomeNipt from './Components/AnandatHomeNipt/AnandatHomeNipt'
import NIPT from './Components/NIPT/NIPT'
import AllergyTesting from './Components/AllergyTesting/AllergyTesting'
import AllergyTest from './Components/AllergyTest/AllergyTest'
import LabShivajiNagarBranch from './Components/LabShivajiNagarBranch/LabShivajiNagarBranch'
import VitaminTesting from './Components/VitaminTesting/VitaminTesting'
import DiabetesLipidProfile from './Components/DiabetesLipidProfile/DiabetesLipidProfile'
import CbcElectrolytesEtc from './Components/CbcElectrolytesEtc/CbcElectrolytesEtc'
import KftCreatinineThyroid from './Components/KftCreatinineThyroid/KftCreatinineThyroid'
import ArthritisPackage from './Components/ArthritisPackage/ArthritisPackage'
import NeubergAnand50Years from './Components/NeubergAnand50Years/NeubergAnand50Years'
import MothersDay from './Components/MothersDay/MothersDay'
import MensHealth from './Components/MensHealth/MensHealth'
import WomensHealth from './Components/WomensHealth/WomensHealth'
import Dengue from './Components/Dengue/Dengue'
import FriendshipDay from './Components/FriendshipDay/FriendshipDay'
import IndependenceDay from './Components/IndependanceDay/IndependanceDay'
import SeniorCitizenCard from './Components/SeniorCitizenCard/SeniorCitizenCard'
import HealthCheck from './Components/HealthCheck/HealthCheck'
import LatestOffer from './Components/LatestOffer/LatestOffer'
import MaintenancePage from './Components/MaintenancePage/MaintenancePage'
import MiniFooter from './Components/Includes/MiniFooter'
import FreeHealthCamp from './Components/FreeHealthCamp/FreeHealthCamp'
// import TestingPage from './Components/Testing-Page/Testing-Page'


export default function App() {
  const dispatch = useDispatch();
  const ref = useRef();
  const loader = useSelector((state) => state.Loader);
  var TestLocation = localStorage.getItem('TestLocation')
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [])
  useEffect(() => {
    if (TestLocation === null) {
      localStorage.setItem('TestLocation', 'bangalore')
      dispatch(setTestLocation('bangalore'));
    } else {
      dispatch(setTestLocation(TestLocation));
    }
  }, [])
  const queryClient = new QueryClient()


  // useEffect(() => {
  //   const currentLocation = window.location.href;
  //   const baseURL = 'http://localhost:3000';
  //   const aboutURL = 'http://localhost:3000/about-us';


  //   if (currentLocation === baseURL || currentLocation === baseURL + '/') {
  //     window.location.href = 'https://www.neubergdiagnostics.com';
  //   } 
  //   // else if (currentLocation.startsWith(baseURL) && currentLocation !== baseURL && currentLocation !== baseURL + '/') {
  //   //   window.location.href = baseURL + '/about-us';
  //   // }

  //   if (currentLocation === aboutURL || currentLocation === aboutURL + '/') {
  //     window.location.href = 'https://www.neubergdiagnostics.com/about-us';
  //   } 
  //   if (currentLocation === 'http://localhost:3000/packages' || currentLocation === 'http://localhost:3000/packages' + '/') {
  //     window.location.href = 'https://www.neubergdiagnostics.com/book-a-test';
  //   } 
  //   if (currentLocation === 'http://localhost:3000/healthcheckup-for-employees' || currentLocation === 'http://localhost:3000/healthcheckup-for-employees' + '/') {
  //     window.location.href = 'https://www.neubergdiagnostics.com/corporate-wellness';
  //   } 
  //   if (currentLocation === 'http://localhost:3000/franchising-opportunities' || currentLocation === 'http://localhost:3000/franchising-opportunities' + '/') {
  //     window.location.href = 'https://www.neubergdiagnostics.com/our-franchise';
  //   } 
  //   if (currentLocation === 'http://localhost:3000/accreditation' || currentLocation === 'http://localhost:3000/accreditation' + '/') {
  //     window.location.href = 'https://www.neubergdiagnostics.com/nabl-status';
  //   } 
  //   if (currentLocation === 'http://localhost:3000/reach-us' || currentLocation === 'http://localhost:3000/reach-us' + '/') {
  //     window.location.href = 'https://www.neubergdiagnostics.com/lab-locator';
  //   } 
  //   if (currentLocation === 'http://localhost:3000/neuberg-anand-lab-at-home-health-checkup' || currentLocation === 'http://localhost:3000/neuberg-anand-lab-at-home-health-checkup' + '/') {
  //     window.location.href = 'https://www.neubergdiagnostics.com/neuberg-anand-lab-at-home-blood-test';
  //   } 
  // }, []);

  // useEffect(() => {
  //   const currentLocation = window.location.href;
  //   const baseURL = window.location.origin; // Dynamically get the base URL

  //   const redirects = [
  //     { path: '/', target: 'https://www.neubergdiagnostics.com' },
  //     { path: '/about-us', target: 'https://www.neubergdiagnostics.com/about-us' },
  //     { path: '/packages', target: 'https://www.neubergdiagnostics.com/book-a-test' },
  //     { path: '/healthcheckup-for-employees', target: 'https://www.neubergdiagnostics.com/corporate-wellness' },
  //     { path: '/franchising-opportunities', target: 'https://www.neubergdiagnostics.com/our-franchise' },
  //     { path: '/accreditation', target: 'https://www.neubergdiagnostics.com/nabl-status' },
  //     { path: '/reach-us', target: 'https://www.neubergdiagnostics.com/lab-locator' },
  //     { path: '/neuberg-anand-lab-at-home-health-checkup', target: 'https://www.neubergdiagnostics.com/neuberg-anand-lab-at-home-blood-test' }
  //   ];

  //   redirects.forEach(({ path, target }) => {
  //     if (currentLocation === baseURL + path || currentLocation === baseURL + path + '/') {
  //       window.location.href = target;
  //     }
  //   });
  // }, []);


  useEffect(() => {
    const currentPath = window.location.pathname;
    const queryString = window.location.search; // Get the query string including '?' and parameters
  
    const redirects = [
      { path: '/', target: 'https://www.neubergdiagnostics.com' },
      { path: '/about-us', target: 'https://www.neubergdiagnostics.com/about-us' },
      { path: '/packages', target: 'https://www.neubergdiagnostics.com/book-a-test' },
      { path: '/healthcheckup-for-employees', target: 'https://www.neubergdiagnostics.com/corporate-wellness' },
      { path: '/franchising-opportunities', target: 'https://www.neubergdiagnostics.com/our-franchise' },
      { path: '/accreditation', target: 'https://dos.neubergdiagnostics.com/nabl-status' },
      { path: '/reach-us', target: 'https://www.neubergdiagnostics.com/lab-locator' },
      { path: '/neuberg-anand-lab-at-home-health-checkup', target: 'https://www.neubergdiagnostics.com/neuberg-anand-lab-at-home-blood-test' },
      // { path: '/neuberg-anand-lab-at-home-labtesting', target: 'https://www.neubergdiagnostics.com/neuberg-anand-lab-at-home-blood-test' }
    ];
  
    redirects.forEach(({ path, target }) => {
      // Check if the current path matches any redirect path
      if (currentPath === path || currentPath === path + '/') {
        // Redirect to the target URL with the query string appended
        window.location.href = target + queryString;
      }
    });
  }, []);
  
  


  // useEffect(() => {
  //   const gtmScript1 = document.createElement("script");
  //   gtmScript1.async = true;
  //   gtmScript1.src = 'https://www.googletagmanager.com/gtag/js?id=G-YPG4W4CLZ5';

  //   const gtmScript2 = document.createElement("script");
  //   gtmScript2.innerHTML = `
  //      window.dataLayer = window.dataLayer || [];
  //     function gtag(){dataLayer.push(arguments);}
  //     gtag('js', new Date());
  //     gtag('config', 'G-YPG4W4CLZ5');
  //   `;
  //   document.head.appendChild(gtmScript1);
  //   document.head.appendChild(gtmScript2);

  // }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <Fragment>
        {loader.status === true ? <Loader /> : null}
        <Header />
        <Routes>
          <Route element={<AuthRoutes />}>
            <Route path='/checkout' exact element={<GuestCheckOut />} />
            <Route path="/my-account" element={<MyProfile />} />
            <Route path='/payment-sucess' element={<ThankYou />} />
          </Route>
          <Route path='/anand-at-home-thank-you' element={<AnandThankYou />} />
          <Route path='/thank-you' element={<AnandThankYou />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/reports/account' element={<ReportAccount />} />
          <Route path='/my-cart' element={<CartList />} />
          <Route path='/reset-password/:customer_id' element={<ResetPassword />} />
          <Route path='/for-patient' element={<Test />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/login-with-otp' exact element={<OtpLogin />} />
          <Route path='/verify-otp' exact element={<VerifyLogin />} />
          <Route path='/forgot-password' exact element={<ForgotPassword />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/test/:TestId' exact element={<TestDetails />} />
          <Route path='/package/:TestId' exact element={<TestDetails />} />
          <Route path='https://www.neubergdiagnostics.com' element={<Home />} />
          <Route path='https://www.neubergdiagnostics.com/about-us' element={<About />} />
          <Route path='/people-behind' element={<Peoplebhind />} />
          <Route path='/history' element={<History />} />
          <Route path='/commitment' element={<Commitment />} />
          <Route path='/accreditation' element={<Accreditation />} />
          <Route path='/patients-consumers' element={<PatientsConsumers />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/packages-ads' element={<PackagesAds />} />
          {/* <Route path='/health-packages' element={<HealthPackages />} /> */}
          <Route path="/health-packages" element={<Navigate to="/packages" />} />
          <Route path='/preparing-for-health-checkup' element={<PreparingForHeathCheckup />} />
          <Route path='/drive-through-blood-collection' element={<DriveThroughBloodCollection />} />
          <Route path='/feedback' element={<FeedbackB2B />} />
          <Route path='/feedback-b2b' element={<Feedback />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/book-an-appointment' element={<BookanAppointment />} />
          <Route path='/department' element={<Department />} />
          <Route path='/hospital-or-lab-management' element={<HospitalLabManagement />} />
          <Route path='/clinical-lab-management' element={<ClinicalLabManagement />} />
          <Route path='/franchising-opportunities' element={<FranchisingOpportunities />} />
          <Route path='/research' element={<Research />} />
          <Route path='/physiotherapy' element={<Physiotherapy />} />
          <Route path='/manual-therapy' element={<ManualTherapy />} />
          <Route path='/exercise-therapy' element={<ExerciseTherapy />} />
          <Route path='/electrotherapy' element={<Electrotherapy />} />
          <Route path='/reach-us' exact element={<Contact />} />
          <Route path='/head-office' exact element={<HeadOffice />} />
          <Route path='/healthcheckup-for-employees' exact element={<HealthCheckupforEmployees />} />
          <Route path='/captains-health-check' exact element={<CaptainHealthCheck />} />
          <Route path='/captains-health' exact element={<CaptainHealth />} />
          <Route path='/nipt' exact element={<NIPT />} />
          <Route path='/allergy-test' exact element={<AllergyTest />} />
          <Route path='/anand-diagnostic-laboratory-shivajiangar-branch' exact element={<LabShivajiNagarBranch />} />
          <Route path='/vitamin-testing' exact element={<VitaminTesting />} />
          <Route path='/cbc-electrolytes-etc' exact element={<CbcElectrolytesEtc />} />
          <Route path='/kft-creatinine-thyroid' exact element={<KftCreatinineThyroid />} />
          <Route path='/anand-at-home-nipt' exact element={<AnandatHomeNipt />} />
          <Route path='/careers' exact element={<Careers />} />
          <Route path='/join-oppourtunities/:id' exact element={<Career />} />
          <Route path='/anandlab-franchise' exact element={<AnandLabFranchise />} />
          <Route path='/covidtesting-employees' exact element={<CovidtestingforEmployees />} />
          <Route path='/covidtesting-employees' exact element={<CovidtestingforEmployees />} />
          <Route path='/find-lab' exact element={<FindLab />} />
          <Route path='/cancellation-policy' exact element={<CancellationPolicy />} />
          <Route path='/privacy-policy' exact element={<PrivacyPolicy />} />
          <Route path='/terms-conditions' exact element={<TermsConditions />} />
          <Route path='/arthritis-package' exact element={<ArthritisPackage />} />
          <Route path='/neuberg-anand-50-years' exact element={<NeubergAnand50Years />} />
          <Route path='/neuberg-anand-mothers-day' exact element={<MothersDay />} />
          <Route path='/mens-health' exact element={<MensHealth />} />
          <Route path='/womens-health' exact element={<WomensHealth />} />
          <Route path='/friendship-day' exact element={<FriendshipDay />} />
          <Route path='/independence-day' exact element={<IndependenceDay />} />
          <Route path='/senior-citizen-card' exact element={<SeniorCitizenCard />} />
          <Route path='/latest-offer-old' exact element={<LatestOffer />} />
          <Route path='/free-health-camp' exact element={<FreeHealthCamp />} />
          {/* <Route path='/testing-page' exact element={<TestingPage />} /> */}



          {/* New routes */}
          <Route path='/neuberg-anand-lab-at-home-dengue-test' exact element={<Dengue />} />
          <Route path='/neuberg-anand-lab-at-home-health-checkup' exact element={<HealthCheck />} />
          <Route path='/neuberg-anand-lab-at-home-allergy-testing' exact element={<AllergyTesting />} />
          <Route path='/neuberg-anand-lab-at-home-diabetes-lipid-profile' exact element={<DiabetesLipidProfile />} />
          <Route path='/neuberg-anand-lab-at-home-labtesting' exact element={<AnandatHome />} />


          {/* Old routes */}
          <Route path='/anand-at-home/dengue' exact element={<MaintenancePage />} />
          <Route path='/health-check' exact element={<MaintenancePage />} />
          <Route path='/allergy-testing' exact element={<MaintenancePage />} />
          <Route path='/diabetes-lipid-profile' exact element={<MaintenancePage />} />
          <Route path='/anand-at-home' exact element={<MaintenancePage />} />

        </Routes>
        {/* <Footer /> */}
        <MiniFooter/>
        <AlertBox />
        <FloatingForm />
        <CallToAction />
      </Fragment>
    </QueryClientProvider>
  )
}