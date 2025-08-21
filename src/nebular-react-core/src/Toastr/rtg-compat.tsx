// rtg-compat.tsx
import * as React from 'react';

// Importa APENAS os valores; nada de tipos do RTG
import _Transition from 'react-transition-group/Transition';
import _TransitionGroup from 'react-transition-group/TransitionGroup';

/** Estados expostos p/ quem consome */
export type TransitionStatusT = 'entering' | 'entered' | 'exiting' | 'exited' | 'unmounted';

/** Props MÍNIMAS e compatíveis para uso comum */
export interface TransitionPropsT {
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  appear?: boolean;
  timeout: number | { enter?: number; exit?: number; appear?: number };
  /** IMPORTANTÍSSIMO: use um RefObject estável do elemento renderizado */
  nodeRef?: React.RefObject<HTMLElement>;
  /** RTG usa render-prop c/ o estado da transição */
  children: (status: TransitionStatusT) => React.ReactNode;
  // Callbacks opcionais (mantidos frouxos):
  onEnter?: (...args: any[]) => void;
  onEntered?: (...args: any[]) => void;
  onEntering?: (...args: any[]) => void;
  onExit?: (...args: any[]) => void;
  onExited?: (...args: any[]) => void;
  onExiting?: (...args: any[]) => void;
}

export interface TransitionGroupPropsT {
  /** componente wrapper; null => Fragment */
  component?: React.ElementType | null;
  children?: React.ReactNode;
  appear?: boolean;
}

/** FC wrappers -> não deixam o constraint antigo “vazar” para o JSX */
export const Transition: React.FC<TransitionPropsT> = (props) =>
  React.createElement(_Transition as unknown as React.ComponentType<any>, props as any);

export const TransitionGroup: React.FC<TransitionGroupPropsT> = (props) =>
  React.createElement(_TransitionGroup as unknown as React.ComponentType<any>, props as any);
