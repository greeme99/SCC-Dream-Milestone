import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { AppShell } from '@/components/AppShell';
import { SessionDetailView } from '@/components/SessionDetailView';
import { COACHING_SESSIONS } from '@/data/coaching-sessions';

export function generateStaticParams() {
  return Object.keys(COACHING_SESSIONS).map((sessionSlug) => ({
    sessionSlug
  }));
}

export default function CoachingSessionPage({
  params
}: {
  params: { sessionSlug: string };
}) {
  const session = COACHING_SESSIONS[params.sessionSlug];
  if (!session) {
    notFound();
  }

  return (
    <AppShell>
      <Suspense
        fallback={
          <div className="rounded-lg border border-line bg-surface p-8 shadow-card">
            회기 가이드를 불러오는 중...
          </div>
        }
      >
        <SessionDetailView session={session} />
      </Suspense>
    </AppShell>
  );
}
