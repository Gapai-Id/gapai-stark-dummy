'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { StepRegister } from './_unit/step-register';
import { StepOTP } from './_unit/step-otp';
import { StepProfile } from './_unit/step-profile';
import { StepEducation } from './_unit/step-education';
import { StepExperience } from './_unit/step-experience';
import { StepTrack } from './_unit/step-track';
import { StepComplete } from './_unit/step-complete';
import { OnboardingProgress } from './_unit/onboarding-progress';

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(0);

  const next = () => setStep((s) => (s < 6 ? ((s + 1) as Step) : s));
  const back = () => setStep((s) => (s > 0 ? ((s - 1) as Step) : s));

  const onboardingStep = step >= 2 && step <= 5 ? step - 1 : null;

  // ── Step 0: green hero + form ─────────────────────────────
  if (step === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="bg-primary-800">
          <div className="max-w-lg mx-auto w-full px-6 pt-12 pb-12 flex flex-col items-center gap-3">
            <Image
              src="/assets/images/gapai-logo-green.png"
              alt="Gapai"
              width={96}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-sm font-sans text-white/60 text-center">
              Persiapkan masa depanmu bersama Gapai
            </p>
          </div>
        </div>

        <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
          <div className="max-w-lg mx-auto w-full px-4 pt-6 pb-16">
            <StepRegister onNext={next} />
          </div>
        </div>

        <footer className="pb-8 pt-2 text-center bg-gray-50">
          <p className="text-2xs text-gray-400">© 2026 Gapai. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  // ── Step 6: full-screen completion ───────────────────────
  if (step === 6) {
    return <StepComplete />;
  }

  // ── Steps 1–5: white header + content ────────────────────
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
        <button onClick={back} className="p-1 -ml-1 text-gray-600 flex-shrink-0">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <Image
          src="/assets/images/gapai-logo-green.png"
          alt="Gapai"
          width={72}
          height={24}
          className="h-6 w-auto"
        />
      </header>

      <main className="flex-1 px-4 pt-6 pb-16 max-w-lg mx-auto w-full flex flex-col">
        {onboardingStep !== null && (
          <OnboardingProgress current={onboardingStep} total={4} />
        )}
        {step === 1 && <StepOTP onNext={next} />}
        {step === 2 && <StepProfile onNext={next} />}
        {step === 3 && <StepEducation onNext={next} />}
        {step === 4 && <StepExperience onNext={next} />}
        {step === 5 && <StepTrack onNext={next} />}
      </main>

      <footer className="pb-8 pt-2 text-center">
        <p className="text-2xs text-gray-400">© 2026 Gapai. All rights reserved.</p>
      </footer>
    </div>
  );
}
