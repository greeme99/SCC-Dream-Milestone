'use client';

import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'dm.checklist';

export interface CheckItem {
  id: string;
  text: string;
  title?: string;
}

interface ChecklistGroupProps {
  title?: string;
  items: CheckItem[];
  resetScopeIds?: string[];
  onResetToast?: (msg: string) => void;
}

export function ChecklistGroup({
  title,
  items,
  resetScopeIds,
  onResetToast
}: ChecklistGroupProps) {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setCheckedMap(JSON.parse(raw));
      }
    } catch {
      // ignore private browsing restriction
    }
  }, []);

  const persist = (nextMap: Record<string, boolean>) => {
    setCheckedMap(nextMap);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextMap));
    } catch {
      // fallback to memory
    }
  };

  const handleToggle = (id: string) => {
    const nextMap = { ...checkedMap, [id]: !checkedMap[id] };
    persist(nextMap);
  };

  const scopeIds = resetScopeIds || items.map((item) => item.id);

  const handleReset = () => {
    const nextMap = { ...checkedMap };
    for (const id of scopeIds) {
      delete nextMap[id];
    }
    persist(nextMap);
    if (onResetToast) {
      onResetToast('체크포인트 상태가 초기화되었습니다.');
    }
  };

  return (
    <div className="rounded-md border border-line-strong bg-subtle p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {title && <h4 className="text-h3 font-semibold text-main">{title}</h4>}
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="btn-press rounded-pill border border-line-strong bg-surface px-3 py-1 text-caption font-medium text-muted transition hover:bg-hover hover:text-main"
        >
          체크 초기화
        </button>
      </div>

      <div className="space-y-2">
        {items.map((item) => {
          const isChecked = Boolean(checkedMap[item.id]);
          return (
            <label
              key={item.id}
              className="flex min-h-11 cursor-pointer items-start gap-3 rounded-sm bg-surface p-3 transition hover:bg-hover"
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleToggle(item.id)}
                className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded-sm accent-[var(--color-primary)]"
              />
              <span className="text-body text-main">
                {item.title && <strong className="mr-1.5 font-semibold">{item.title}:</strong>}
                {item.text}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
