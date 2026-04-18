import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';

import ScrTopMenu       from './screens/ScrTopMenu';
import ScrMemberSearch  from './screens/ScrMemberSearch';
import ScrMemberAdmin   from './screens/ScrMemberAdmin';
import ScrAdmission     from './screens/ScrAdmission';
import ScrFeeSearch     from './screens/ScrFeeSearch';
import ScrPayment       from './screens/ScrPayment';
import ScrInquiry       from './screens/ScrInquiry';
import ScrWithdrawal    from './screens/ScrWithdrawal';

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
    </>
  );
}
