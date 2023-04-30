import { _$LH as o } from './lit-html.js';
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: l } = o,
  t = (o) => null === o || ('object' != typeof o && 'function' != typeof o),
  i = { HTML: 1, SVG: 2 },
  n = (o, l) => (void 0 === l ? void 0 !== (null == o ? void 0 : o._$litType$) : (null == o ? void 0 : o._$litType$) === l),
  d = (o) => void 0 !== (null == o ? void 0 : o._$litDirective$),
  v = (o) => (null == o ? void 0 : o._$litDirective$),
  e = (o) => void 0 === o.strings,
  c = () => document.createComment(''),
  r = (o, t, i) => {
    var n;
    const d = o._$AA.parentNode,
      v = void 0 === t ? o._$AB : t._$AA;
    if (void 0 === i) {
      const t = d.insertBefore(c(), v),
        n = d.insertBefore(c(), v);
      i = new l(t, n, o, o.options);
    } else {
      const l = i._$AB.nextSibling,
        t = i._$AM,
        e = t !== o;
      if (e) {
        let l;
        null === (n = i._$AQ) || void 0 === n || n.call(i, o), (i._$AM = o), void 0 !== i._$AP && (l = o._$AU) !== t._$AU && i._$AP(l);
      }
      if (l !== v || e) {
        let o = i._$AA;
        for (; o !== l; ) {
          const l = o.nextSibling;
          d.insertBefore(o, v), (o = l);
        }
      }
    }
    return i;
  },
  u = (o, l, t = o) => (o._$AI(l, t), o),
  f = {},
  s = (o, l = f) => (o._$AH = l),
  m = (o) => o._$AH,
  p = (o) => {
    var l;
    null === (l = o._$AP) || void 0 === l || l.call(o, !1, !0);
    let t = o._$AA;
    const i = o._$AB.nextSibling;
    for (; t !== i; ) {
      const o = t.nextSibling;
      t.remove(), (t = o);
    }
  },
  a = (o) => {
    o._$AR();
  };
export {
  i as TemplateResultType,
  a as clearPart,
  m as getCommittedValue,
  v as getDirectiveClass,
  r as insertPart,
  d as isDirectiveResult,
  t as isPrimitive,
  e as isSingleExpression,
  n as isTemplateResult,
  p as removePart,
  u as setChildPartValue,
  s as setCommittedValue,
};
//# sourceMappingURL=directive-helpers.js.map