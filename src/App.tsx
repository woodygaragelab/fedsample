import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { routes } from './routes';

function ScreenIdFooter(): JSX.Element {
  const { pathname } = useLocation();
  const route = routes.find((r) =>
    r.path === '/' ? pathname === '/' : pathname.startsWith(r.path)
  );
  if (!route) return <></>;
  return (
    <div className="screen-id-footer">{route.id}</div>
  );
}

import ScrTopMenu       from './screens/ScrTopMenu';
import ScrMemberSearch  from './screens/ScrMemberSearch';
import ScrMemberAdmin   from './screens/ScrMemberAdmin';
import ScrAdmission     from './screens/ScrAdmission';
import ScrFeeSearch     from './screens/ScrFeeSearch';
import ScrPayment       from './screens/ScrPayment';
import ScrInquiry       from './screens/ScrInquiry';
import ScrWithdrawal    from './screens/ScrWithdrawal';

import ScrAnnualFeeSearch  from './screens/ScrAnnualFeeSearch';
import ScrAnnualFeeSetting from './screens/ScrAnnualFeeSetting';
import ScrAnnualFeeDetail  from './screens/ScrAnnualFeeDetail';
import ScrAnnualFeeBulk    from './screens/ScrAnnualFeeBulk';
import ScrAnnualFeePayment from './screens/ScrAnnualFeePayment';

import ScrTrainingSearch       from './screens/ScrTrainingSearch';
import ScrTrainingSetting      from './screens/ScrTrainingSetting';
import ScrTrainingFee          from './screens/ScrTrainingFee';
import ScrTrainingFeeDetail    from './screens/ScrTrainingFeeDetail';
import ScrTrainingPayment      from './screens/ScrTrainingPayment';
import ScrTrainingApplyPre     from './screens/ScrTrainingApplyPre';
import ScrTrainingContactList  from './screens/ScrTrainingContactList';
import ScrTrainingApplyConfirm from './screens/ScrTrainingApplyConfirm';
import ScrTrainingApply        from './screens/ScrTrainingApply';
import ScrTrainingApplyComplete from './screens/ScrTrainingApplyComplete';
import ScrTrainingApplyCancel  from './screens/ScrTrainingApplyCancel';

import ScrWebLogin      from './screens/ScrWebLogin';
import ScrWebHome       from './screens/ScrWebHome';
import ScrWebRegInfo    from './screens/ScrWebRegInfo';
import ScrWebContact    from './screens/ScrWebContact';
import ScrWebWithdraw   from './screens/ScrWebWithdraw';

import ScrApplyForm     from './screens/ScrApplyForm';
import ScrApplyConfirm  from './screens/ScrApplyConfirm';
import ScrApplyComplete from './screens/ScrApplyComplete';

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className="app-main">
        <Routes>
          {/* WEB マイページ ログインを初期画面に */}
          <Route path="/"                element={<Navigate to="/web/login" replace />} />

          {/* 管理システム */}
          <Route path="/top"             element={<ScrTopMenu />} />
          <Route path="/member/search"   element={<ScrMemberSearch />} />
          <Route path="/member/admin"    element={<ScrMemberAdmin />} />
          <Route path="/admission"       element={<ScrAdmission />} />
          <Route path="/fee/search"      element={<ScrFeeSearch />} />
          <Route path="/payment"         element={<ScrPayment />} />
          <Route path="/inquiry"         element={<ScrInquiry />} />
          <Route path="/withdrawal"      element={<ScrWithdrawal />} />

          {/* 年会費管理システム */}
          <Route path="/annual/search"   element={<ScrAnnualFeeSearch />} />
          <Route path="/annual/setting"  element={<ScrAnnualFeeSetting />} />
          <Route path="/annual/detail"   element={<ScrAnnualFeeDetail />} />
          <Route path="/annual/bulk"     element={<ScrAnnualFeeBulk />} />
          <Route path="/annual/payment"  element={<ScrAnnualFeePayment />} />

          {/* 研修会システム */}
          <Route path="/training/search"         element={<ScrTrainingSearch />} />
          <Route path="/training/setting"        element={<ScrTrainingSetting />} />
          <Route path="/training/fee"            element={<ScrTrainingFee />} />
          <Route path="/training/fee-detail"     element={<ScrTrainingFeeDetail />} />
          <Route path="/training/payment"        element={<ScrTrainingPayment />} />
          <Route path="/training/apply-pre"      element={<ScrTrainingApplyPre />} />
          <Route path="/training/contact-list"   element={<ScrTrainingContactList />} />
          <Route path="/training/apply-confirm"  element={<ScrTrainingApplyConfirm />} />
          <Route path="/training/apply"          element={<ScrTrainingApply />} />
          <Route path="/training/apply-complete" element={<ScrTrainingApplyComplete />} />
          <Route path="/training/apply-cancel"   element={<ScrTrainingApplyCancel />} />

          {/* WEB マイページ */}
          <Route path="/web/login"       element={<ScrWebLogin />} />
          <Route path="/web/home"        element={<ScrWebHome />} />
          <Route path="/web/reginfo"     element={<ScrWebRegInfo />} />
          <Route path="/web/contact"     element={<ScrWebContact />} />
          <Route path="/web/withdraw"    element={<ScrWebWithdraw />} />

          {/* WEB 入会申込 */}
          <Route path="/apply/form"      element={<ScrApplyForm />} />
          <Route path="/apply/confirm"   element={<ScrApplyConfirm />} />
          <Route path="/apply/complete"  element={<ScrApplyComplete />} />

          {/* 不一致は ログインへ */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <ScreenIdFooter />
    </>
  );
}
