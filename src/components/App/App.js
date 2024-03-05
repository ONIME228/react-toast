import React from 'react';
import Footer from '../Footer';

import ToastPlayground from '../ToastPlayground';
import ToastProvider from "../ToastProvider/ToastProvider";
import { ToastsContext } from '../ToastProvider/ToastProvider';

function App() {
  return (
    <>
    <ToastProvider>
      <ToastPlayground />
    </ToastProvider>
    <Footer />
    </>
  );
}

export default App;
