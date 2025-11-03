import { useEffect, useRef, useState } from "react";

type PinnedResult = {
  containerRef: React.RefObject<HTMLDivElement>;
  titleRef: React.RefObject<HTMLDivElement>;
  style: React.CSSProperties;
};

/**
 * usePinnedTitle
 * 固定左侧标题在视口顶部，直到对应 section 的内容滚动完毕。
 * 解决部分布局/浏览器下 position: sticky 失效的问题。
 */
export function usePinnedTitle(offsetTopPx: number = 10): PinnedResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const handle = () => {
      const container = containerRef.current;
      const title = titleRef.current;
      if (!container || !title) return;

      // section 左列容器的位置与尺寸
      const cRect = container.getBoundingClientRect();
      const tRect = title.getBoundingClientRect();
      const top = Math.max(0, offsetTopPx);

      // 处于“应固定”区间：容器顶部到达阈值，且容器底部仍未越过阈值 + 标题高度
      const shouldFix = cRect.top <= top && cRect.bottom - tRect.height > top;

      if (shouldFix) {
        setStyle({
          position: "fixed",
          top: `${top}px`,
          left: `${cRect.left}px`,
          width: `${cRect.width}px`,
          zIndex: 30,
        });
        return;
      }

      // 到达容器底部：保持在容器底（避免与下一标题重叠）
      if (cRect.bottom - tRect.height <= top && cRect.top < cRect.bottom) {
        setStyle({
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        });
        return;
      }

      // 默认状态
      setStyle({});
    };

    // 初次与后续处理
    handle();
    window.addEventListener("scroll", handle, { passive: true } as any);
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, [offsetTopPx]);

  return { containerRef, titleRef, style };
}


