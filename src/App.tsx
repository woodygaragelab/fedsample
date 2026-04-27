import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { routes } from './routes';
import ProtectedRoute from './auth/ProtectedRoute';

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

import ScrAdminLogin    from './screens/ScrAdminLogin';
import ScrTopMenu       from './screens/ScrTopMenu';
import ScrMemberSearch  from './screens/ScrMemberSearch';
import ScrMemberAdmin   from './screens/ScrMemberAdmin';
import ScrAdmission     from './screens/ScrAdmission';
import ScrFeeSearch     from './screens/ScrFeeSearch';
import ScrPayment       from './screens/ScrPayment';
import ScrInquiry       from './screens/ScrInquiry';
import ScrWithdrawal    from './screens/ScrWithdrawal';

import ScrAnketSetting    from './screens/ScrAnketSetting';
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

          {/* 管理者ログイン */}
          <Route path="/admin/login"     element={<ScrAdminLogin />} />

          {/* 管理システム (要: admin ロール) */}
          <Route path="/top"             element={<ProtectedRoute requiredRole="admin"><ScrTopMenu /></ProtectedRoute>} />
          <Route path="/member/search"   element={<ProtectedRoute requiredRole="admin"><ScrMemberSearch /></ProtectedRoute>} />
          <Route path="/member/admin"    element={<ProtectedRoute requiredRole="admin"><ScrMemberAdmin /></ProtectedRoute>} />
          <Route path="/admission"       element={<ProtectedRoute requiredRole="admin"><ScrAdmission /></ProtectedRoute>} />
          <Route path="/fee/search"      element={<ProtectedRoute requiredRole="admin"><ScrFeeSearch /></ProtectedRoute>} />
          <Route path="/payment"         element={<ProtectedRoute requiredRole="admin"><ScrPayment /></ProtectedRoute>} />
          <Route path="/inquiry"         element={<ProtectedRoute requiredRole="admin"><ScrInquiry /></ProtectedRoute>} />
          <Route path="/withdrawal"      element={<ProtectedRoute requiredRole="admin"><ScrWithdrawal /></ProtectedRoute>} />

          {/* アンケートシステム (要: admin ロール) */}
          <Route path="/anket/setting"   element={<ProtectedRoute requiredRole="admin"><ScrAnketSetting /></ProtectedRoute>} />

          {/* 年会費管理システム (要: admin ロール) */}
          <Route path="/annual/search"   element={<ProtectedRoute requiredRole="admin"><ScrAnnualFeeSearch /></ProtectedRoute>} />
          <Route path="/annual/setting"  element={<ProtectedRoute requiredRole="admin"><ScrAnnualFeeSetting /></ProtectedRoute>} />
          <Route path="/annual/detail"   element={<ProtectedRoute requiredRole="admin"><ScrAnnualFeeDetail /></ProtectedRoute>} />
          <Route path="/annual/bulk"     element={<ProtectedRoute requiredRole="admin"><ScrAnnualFeeBulk /></ProtectedRoute>} />
          <Route path="/annual/payment"  element={<ProtectedRoute requiredRole="admin"><ScrAnnualFeePayment /></ProtectedRoute>} />

          {/* 研修会システム (要: admin ロール) */}
          <Route path="/training/search"         element={<ProtectedRoute requiredRole="admin"><ScrTrainingSearch /></ProtectedRoute>} />
          <Route path="/training/setting"        element={<ProtectedRoute requiredRole="admin"><ScrTrainingSetting /></ProtectedRoute>} />
          <Route path="/training/fee"            element={<ProtectedRoute requiredRole="admin"><ScrTrainingFee /></ProtectedRoute>} />
          <Route path="/training/fee-detail"     element={<ProtectedRoute requiredRole="admin"><ScrTrainingFeeDetail /></ProtectedRoute>} />
          <Route path="/training/payment"        element={<ProtectedRoute requiredRole="admin"><ScrTrainingPayment /></ProtectedRoute>} />
          <Route path="/training/apply-pre"      element={<ProtectedRoute requiredRole="admin"><ScrTrainingApplyPre /></ProtectedRoute>} />
          <Route path="/training/apply-confirm"  element={<ProtectedRoute requiredRole="admin"><ScrTrainingApplyConfirm /></ProtectedRoute>} />
          <Route path="/training/apply"          element={<ProtectedRoute requiredRole="admin"><ScrTrainingApply /></ProtectedRoute>} />
          <Route path="/training/apply-complete" element={<ProtectedRoute requiredRole="admin"><ScrTrainingApplyComplete /></ProtectedRoute>} />
          <Route path="/training/apply-cancel"   element={<ProtectedRoute requiredRole="admin"><ScrTrainingApplyCancel /></ProtectedRoute>} />

          {/* WEB マイページ */}
          <Route path="/web/login"       element={<ScrWebLogin />} />
          <Route path="/web/home"        element={<ProtectedRoute requiredRole="member"><ScrWebHome /></ProtectedRoute>} />
          <Route path="/web/reginfo"     element={<ProtectedRoute requiredRole="member"><ScrWebRegInfo /></ProtectedRoute>} />
          <Route path="/web/contact"     element={<ProtectedRoute requiredRole="member"><ScrWebContact /></ProtectedRoute>} />
          <Route path="/web/withdraw"    element={<ProtectedRoute requiredRole="member"><ScrWebWithdraw /></ProtectedRoute>} />
          <Route path="/training/contact-list" element={<ProtectedRoute requiredRole="member"><ScrTrainingContactList /></ProtectedRoute>} />

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
