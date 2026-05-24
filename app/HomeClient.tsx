"use client";

import { useEffect } from "react";

const css = `
:root{--void:#060610;--deep:#0d0b1e;--pm:#2d1b69;--pg:#6c3bbd;--am:#9b59e8;--vl:#c084fc;--gold:#d4af37;--gl:#f0d060;--cr:#f0e8d0}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--void);color:var(--cr);font-family:'Crimson Text',Georgia,serif;font-size:18px;overflow-x:hidden}
#starfield{position:fixed;inset:0;z-index:0;pointer-events:none}
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px 40px;display:flex;align-items:center;justify-content:space-between;background:linear-gradient(to bottom,rgba(6,6,16,.97),transparent);transition:background .4s,border-color .4s}
nav.scrolled{background:rgba(6,6,16,.98);border-bottom:1px solid rgba(156,89,232,.15)}
.nl{font-family:'Cinzel',serif;font-size:1.6rem;font-weight:900;letter-spacing:.15em;color:var(--gold);text-shadow:0 0 30px rgba(212,175,55,.5);text-decoration:none}
.nl span{color:var(--vl)}
.nv{display:flex;gap:32px;list-style:none}
.nv a{font-family:'Cinzel',serif;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(240,232,208,.55);text-decoration:none;transition:color .3s}
.nv a:hover{color:var(--gl)}
.nc{background:linear-gradient(135deg,var(--pm),var(--pg))!important;color:#fff!important;padding:10px 22px;border-radius:2px;font-weight:700!important;box-shadow:0 0 20px rgba(108,59,189,.4);transition:box-shadow .3s,transform .3s!important}
.nc:hover{box-shadow:0 0 40px rgba(108,59,189,.7)!important;transform:translateY(-1px)}
.hero{position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:130px 24px 80px;z-index:1}
.hero::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-55%);width:750px;height:750px;background:radial-gradient(ellipse,rgba(108,59,189,.22) 0%,transparent 70%);pointer-events:none}
.hey{font-family:'Cinzel',serif;font-size:.65rem;letter-spacing:.45em;text-transform:uppercase;color:var(--am);margin-bottom:24px;opacity:0;animation:fu 1s .2s forwards}
h1.hh{font-family:'Cinzel',serif;font-size:clamp(2.8rem,7vw,6rem);font-weight:900;line-height:1.1;color:var(--cr);text-shadow:0 0 60px rgba(156,89,232,.4),0 0 120px rgba(108,59,189,.2);opacity:0;animation:fu 1s .4s forwards;max-width:900px}
h1.hh em{font-style:normal;color:var(--gold);text-shadow:0 0 40px rgba(212,175,55,.6)}
.tb200{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(212,175,55,.12),rgba(108,59,189,.12));border:1px solid rgba(212,175,55,.55);border-radius:3px;padding:13px 30px;margin:28px 0 0;font-family:'Cinzel',serif;font-size:.8rem;font-weight:700;letter-spacing:.15em;color:var(--gl);opacity:0;animation:fu 1s .6s forwards;box-shadow:0 0 40px rgba(212,175,55,.15),inset 0 0 20px rgba(212,175,55,.03);position:relative;overflow:hidden}
.tb200::before{content:'';position:absolute;inset:-1px;background:linear-gradient(135deg,rgba(212,175,55,.25),transparent 50%,rgba(108,59,189,.25));border-radius:3px;z-index:-1;animation:sh 3s ease-in-out infinite}
@keyframes sh{0%,100%{opacity:.5}50%{opacity:1}}
.tc{font-size:1.5rem;font-weight:900;color:var(--gold);text-shadow:0 0 20px rgba(212,175,55,.7)}
.hs{font-size:1.15rem;color:rgba(240,232,208,.65);line-height:1.75;max-width:560px;margin:20px auto 0;opacity:0;animation:fu 1s .8s forwards}
.hb{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:40px;opacity:0;animation:fu 1s 1s forwards}
.bp{display:inline-flex;align-items:center;gap:9px;padding:17px 38px;background:linear-gradient(135deg,var(--pm),var(--pg));border:1px solid rgba(156,89,232,.5);color:#fff;font-family:'Cinzel',serif;font-size:.82rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;border-radius:2px;transition:all .4s;box-shadow:0 0 40px rgba(108,59,189,.35),inset 0 1px 0 rgba(255,255,255,.1)}
.bp:hover{box-shadow:0 0 70px rgba(108,59,189,.6),inset 0 1px 0 rgba(255,255,255,.15);transform:translateY(-2px);border-color:var(--am)}
.bs{display:inline-flex;align-items:center;gap:9px;padding:17px 32px;background:transparent;border:1px solid rgba(212,175,55,.35);color:var(--gold);font-family:'Cinzel',serif;font-size:.82rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;border-radius:2px;transition:all .4s}
.bs:hover{background:rgba(212,175,55,.07);border-color:var(--gold);box-shadow:0 0 30px rgba(212,175,55,.18)}
.hv{position:relative;margin-top:60px;opacity:0;animation:fu 1.2s 1.1s forwards}
.pw{display:inline-block;animation:fl 6s ease-in-out infinite}
.pf{width:240px;height:480px;border:2px solid rgba(156,89,232,.5);border-radius:32px;background:linear-gradient(160deg,#0d0b1e,#1a0f3d 50%,#0d0b1e);position:relative;overflow:hidden;box-shadow:0 0 0 6px rgba(108,59,189,.1),0 0 60px rgba(108,59,189,.3),0 40px 80px rgba(0,0,0,.6)}
.pno{width:80px;height:20px;background:#060610;border-radius:0 0 14px 14px;margin:0 auto;position:relative;z-index:2}
.psc{padding:12px 16px;display:flex;flex-direction:column;gap:10px}
.pc{background:rgba(108,59,189,.15);border:1px solid rgba(156,89,232,.3);border-radius:12px;padding:12px;display:flex;align-items:center;gap:10px;animation:pca 3s ease-in-out infinite}
.pc:nth-child(2){animation-delay:.5s;opacity:.85}
.pc:nth-child(3){animation-delay:1s;opacity:.7}
@keyframes pca{0%,100%{border-color:rgba(156,89,232,.3)}50%{border-color:rgba(156,89,232,.7);box-shadow:0 0 12px rgba(156,89,232,.2)}}
.pa{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;background:rgba(108,59,189,.4);flex-shrink:0}
.pi{flex:1}
.pn2{font-family:'Cinzel',serif;font-size:.55rem;color:var(--cr);font-weight:600}
.pd2{font-size:.48rem;color:rgba(240,232,208,.5);margin-top:2px}
.pb2{font-size:.42rem;padding:3px 7px;border-radius:20px;font-family:'Cinzel',serif;letter-spacing:.05em}
.bon{background:rgba(74,222,128,.15);color:#4ade80;border:1px solid rgba(74,222,128,.3)}
.bbu{background:rgba(250,204,21,.15);color:#facc15;border:1px solid rgba(250,204,21,.3)}
.ring{position:absolute;width:400px;height:400px;border-radius:50%;border:1px solid rgba(108,59,189,.15);top:50%;left:50%;transform:translate(-50%,-50%);animation:er 4s ease-out infinite}
.ring:nth-child(2){animation-delay:1.3s}
.ring:nth-child(3){animation-delay:2.6s}
@keyframes er{0%{transform:translate(-50%,-50%) scale(.8);opacity:.5}100%{transform:translate(-50%,-50%) scale(1.8);opacity:0}}
.sbs{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:28px;opacity:0;animation:fu 1s 1.3s forwards}
.sb{display:inline-flex;align-items:center;gap:10px;padding:13px 22px;border:1px solid rgba(240,232,208,.2);border-radius:10px;background:rgba(255,255,255,.04);text-decoration:none;color:var(--cr);transition:all .3s;backdrop-filter:blur(6px)}
.sb:hover{background:rgba(255,255,255,.09);border-color:rgba(240,232,208,.45);transform:translateY(-2px)}
.sb svg{width:24px;height:24px;fill:var(--cr)}
.sbt{display:flex;flex-direction:column}
.sbsub{font-size:.6rem;opacity:.6;letter-spacing:.05em}
.sbname{font-family:'Cinzel',serif;font-size:.85rem;font-weight:700}
.sbhi{border-color:rgba(240,232,208,.55)!important;background:rgba(255,255,255,.09)!important}
.sbdim{opacity:.4}
section{position:relative;z-index:1;padding:100px 24px}
.con{max-width:1100px;margin:0 auto}
.slb{font-family:'Cinzel',serif;font-size:.65rem;letter-spacing:.45em;text-transform:uppercase;color:var(--am);text-align:center;margin-bottom:14px}
.st{font-family:'Cinzel',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;text-align:center;color:var(--cr);line-height:1.2;margin-bottom:14px}
.st em{font-style:normal;color:var(--gold)}
.ss{text-align:center;font-size:1.05rem;color:rgba(240,232,208,.55);max-width:620px;margin:0 auto 60px;line-height:1.7}
.dv{width:100%;height:1px;background:linear-gradient(to right,transparent,rgba(156,89,232,.25),transparent)}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:0;position:relative}
.steps::before{content:'';position:absolute;top:51px;left:16.5%;right:16.5%;height:1px;background:linear-gradient(to right,transparent,var(--pg),transparent)}
.step{padding:40px 28px;text-align:center}
.snum{width:58px;height:58px;border-radius:50%;border:1px solid rgba(156,89,232,.5);background:radial-gradient(circle,rgba(108,59,189,.3),transparent);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-family:'Cinzel',serif;font-size:1.3rem;color:var(--gold);box-shadow:0 0 20px rgba(108,59,189,.3)}
.step h3{font-family:'Cinzel',serif;font-size:.95rem;font-weight:700;color:var(--cr);margin-bottom:12px;letter-spacing:.05em}
.step p{font-size:.93rem;color:rgba(240,232,208,.58);line-height:1.65}
.fg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.fc{background:linear-gradient(160deg,rgba(26,15,61,.8),rgba(13,11,30,.9));border:1px solid rgba(156,89,232,.18);border-radius:4px;padding:30px 24px;transition:all .4s;position:relative;overflow:hidden}
.fc::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(to right,transparent,var(--pg),transparent);opacity:0;transition:opacity .4s}
.fc:hover{border-color:rgba(156,89,232,.5);transform:translateY(-4px);box-shadow:0 20px 60px rgba(108,59,189,.2)}
.fc:hover::before{opacity:1}
.fav{font-size:2.4rem;margin-bottom:14px;display:block}
.fn{font-family:'Cinzel',serif;font-size:1rem;font-weight:700;color:var(--cr);margin-bottom:3px}
.ftl{font-size:.78rem;color:var(--am);margin-bottom:12px;letter-spacing:.05em}
.fd{font-size:.9rem;color:rgba(240,232,208,.58);line-height:1.65;margin-bottom:18px}
.ff{display:flex;align-items:center;justify-content:space-between}
.fp{display:flex;align-items:center;gap:5px;font-family:'Cinzel',serif;font-size:.78rem;color:var(--gold)}
.fst{font-size:.62rem;padding:4px 10px;border-radius:20px;letter-spacing:.05em;font-family:'Cinzel',serif}
.son{background:rgba(74,222,128,.1);color:#4ade80;border:1px solid rgba(74,222,128,.3)}
.sof{background:rgba(156,163,175,.1);color:#9ca3af;border:1px solid rgba(156,163,175,.2)}
.slim{background:rgba(250,204,21,.1);color:#facc15;border:1px solid rgba(250,204,21,.3)}
.ftg{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
.ftc{padding:36px 32px;border:1px solid rgba(156,89,232,.15);border-radius:4px;background:rgba(13,11,30,.6);transition:all .35s;position:relative;overflow:hidden}
.ftc.cs{opacity:.52}
.ftc:hover:not(.cs){border-color:rgba(212,175,55,.4);background:rgba(26,15,61,.8);box-shadow:0 0 40px rgba(212,175,55,.07)}
.fch{display:flex;align-items:center;gap:16px;margin-bottom:18px}
.fib{font-size:2rem;line-height:1}
.fct{font-family:'Cinzel',serif;font-size:1.1rem;font-weight:700;color:var(--cr);letter-spacing:.03em}
.fcs{font-size:.72rem;color:var(--am);margin-top:3px;letter-spacing:.05em}
.ftc p{font-size:.93rem;color:rgba(240,232,208,.6);line-height:1.72;margin-bottom:14px}
.ftc p:last-child{margin-bottom:0}
.fdl{list-style:none;display:flex;flex-direction:column;gap:7px;margin-top:4px}
.fdl li{font-size:.85rem;color:rgba(240,232,208,.5);display:flex;align-items:flex-start;gap:8px;line-height:1.5}
.fdl li::before{content:'◆';font-size:.5rem;color:var(--am);margin-top:4px;flex-shrink:0}
.ctag{position:absolute;top:16px;right:16px;font-family:'Cinzel',serif;font-size:.55rem;letter-spacing:.1em;color:var(--am);border:1px solid rgba(156,89,232,.3);padding:3px 9px;border-radius:2px}
.tfs{background:linear-gradient(180deg,rgba(45,27,105,.12) 0%,rgba(13,11,30,.6) 50%,transparent 100%);padding:100px 24px}
.tfi{max-width:900px;margin:0 auto;text-align:center}
.t200{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;width:200px;height:200px;border-radius:50%;border:2px solid rgba(212,175,55,.4);background:radial-gradient(circle,rgba(212,175,55,.12),rgba(108,59,189,.08),transparent);box-shadow:0 0 60px rgba(212,175,55,.2),0 0 120px rgba(108,59,189,.15);margin:0 auto 40px;position:relative;animation:pg 3s ease-in-out infinite}
@keyframes pg{0%,100%{box-shadow:0 0 60px rgba(212,175,55,.2),0 0 120px rgba(108,59,189,.15);border-color:rgba(212,175,55,.4)}50%{box-shadow:0 0 100px rgba(212,175,55,.4),0 0 180px rgba(108,59,189,.25);border-color:rgba(212,175,55,.8)}}
.t200::before{content:'';position:absolute;width:220px;height:220px;border-radius:50%;border:1px solid rgba(212,175,55,.15);animation:er 3s ease-out infinite}
.tbn{font-family:'Cinzel',serif;font-size:3.5rem;font-weight:900;color:var(--gold);text-shadow:0 0 30px rgba(212,175,55,.6);line-height:1}
.tbl{font-family:'Cinzel',serif;font-size:.65rem;letter-spacing:.25em;color:var(--gl);margin-top:4px;opacity:.8}
.tbr{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:40px 0}
.tbi{padding:24px 20px;border:1px solid rgba(156,89,232,.2);border-radius:4px;background:rgba(13,11,30,.5);text-align:center}
.tbn2{font-family:'Cinzel',serif;font-size:1.6rem;font-weight:900;color:var(--am);margin-bottom:6px}
.tbl2{font-size:.8rem;color:rgba(240,232,208,.6);line-height:1.5}
.tei2{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-top:32px}
.te{display:flex;align-items:center;gap:8px;padding:12px 22px;border:1px solid rgba(156,89,232,.2);border-radius:2px;background:rgba(13,11,30,.4);font-size:.85rem;color:rgba(240,232,208,.65)}
.fw{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.ttl{font-family:'Cinzel',serif;font-size:.65rem;letter-spacing:.3em;color:var(--am);margin-bottom:18px}
.tp{display:flex;align-items:center;justify-content:space-between;padding:15px 20px;border:1px solid rgba(156,89,232,.18);border-bottom:none;transition:all .3s}
.tp:first-of-type{border-radius:4px 4px 0 0}
.tp:last-of-type{border-bottom:1px solid rgba(156,89,232,.18);border-radius:0 0 4px 4px}
.tp:hover{background:rgba(108,59,189,.07);border-color:rgba(156,89,232,.38)}
.ta{display:flex;align-items:center;gap:8px;font-family:'Cinzel',serif;font-size:.88rem;color:var(--cr)}
.tpr{font-family:'Cinzel',serif;font-size:1rem;font-weight:700;color:var(--gold)}
.prc{background:linear-gradient(160deg,rgba(45,27,105,.6),rgba(26,15,61,.8));border:1px solid rgba(212,175,55,.3);border-radius:4px;padding:34px 30px;position:relative;overflow:hidden}
.prc::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(to right,transparent,var(--gold),transparent)}
.pbt{display:inline-block;font-family:'Cinzel',serif;font-size:.58rem;letter-spacing:.2em;color:var(--gold);border:1px solid rgba(212,175,55,.4);padding:4px 12px;border-radius:2px;margin-bottom:14px;background:rgba(212,175,55,.06)}
.prc h3{font-family:'Cinzel',serif;font-size:1.35rem;font-weight:700;color:var(--cr);margin-bottom:4px}
.ppb{font-family:'Cinzel',serif;font-size:2.4rem;font-weight:900;color:var(--gold);text-shadow:0 0 30px rgba(212,175,55,.4);margin:14px 0 4px}
.pps{font-size:.83rem;color:rgba(240,232,208,.5);margin-bottom:22px}
.pfl{list-style:none;display:flex;flex-direction:column;gap:9px;margin-bottom:26px}
.pfl li{display:flex;align-items:center;gap:9px;font-size:.93rem;color:rgba(240,232,208,.8)}
.pfl li::before{content:'✦';color:var(--gold);font-size:.58rem}
.aif{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.af{padding:30px 24px;border-left:2px solid rgba(156,89,232,.25);transition:border-color .3s}
.af:hover{border-color:var(--am)}
.afi{font-size:1.7rem;margin-bottom:14px;display:block;filter:drop-shadow(0 0 8px rgba(156,89,232,.5))}
.af h3{font-family:'Cinzel',serif;font-size:.9rem;font-weight:700;color:var(--cr);margin-bottom:9px;letter-spacing:.03em}
.af p{font-size:.88rem;color:rgba(240,232,208,.55);line-height:1.7}
.fql{max-width:760px;margin:0 auto}
.fqi{border-bottom:1px solid rgba(156,89,232,.15);overflow:hidden}
.fqq{width:100%;background:none;border:none;color:var(--cr);font-family:'Cinzel',serif;font-size:.9rem;font-weight:700;letter-spacing:.03em;text-align:left;padding:22px 0;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:16px;transition:color .3s}
.fqq:hover{color:var(--gold)}
.fqq .fi{color:var(--am);font-size:1.1rem;flex-shrink:0;transition:transform .3s}
.fqi.open .fi{transform:rotate(45deg)}
.fqa{max-height:0;overflow:hidden;transition:max-height .4s ease}
.fqai{font-size:.95rem;color:rgba(240,232,208,.62);line-height:1.75;padding:0 0 20px}
.fqi.open .fqa{max-height:300px}
.dcta{text-align:center;padding:120px 24px;position:relative;overflow:hidden}
.dcta::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:650px;height:650px;background:radial-gradient(ellipse,rgba(108,59,189,.2) 0%,transparent 70%);pointer-events:none}
.dcta h2{font-family:'Cinzel',serif;font-size:clamp(2rem,5vw,3.8rem);font-weight:900;color:var(--cr);margin-bottom:18px;position:relative;z-index:1}
.dcta h2 em{font-style:normal;color:var(--gold);text-shadow:0 0 30px rgba(212,175,55,.4)}
.dcta p{font-size:1.1rem;color:rgba(240,232,208,.6);max-width:500px;margin:0 auto 36px;line-height:1.75;position:relative;z-index:1}
.ftb{display:inline-block;background:linear-gradient(135deg,rgba(212,175,55,.1),rgba(156,89,232,.1));border:1px solid rgba(212,175,55,.35);color:var(--gl);font-family:'Cinzel',serif;font-size:.72rem;letter-spacing:.22em;padding:11px 26px;border-radius:2px;margin-bottom:32px;position:relative;z-index:1}
.slks{display:flex;gap:28px;justify-content:center;flex-wrap:wrap;margin-top:32px}
.slks a{font-family:'Cinzel',serif;font-size:.62rem;letter-spacing:.2em;color:rgba(240,232,208,.32);text-decoration:none;transition:color .3s}
.slks a:hover{color:rgba(240,232,208,.7)}
footer{position:relative;z-index:1;border-top:1px solid rgba(156,89,232,.12);padding:44px 24px}
.foi{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px}
.fol{font-family:'Cinzel',serif;font-size:1.15rem;font-weight:900;color:var(--gold);letter-spacing:.1em}
.fol span{color:var(--am)}
.foli{display:flex;gap:24px;list-style:none;flex-wrap:wrap}
.foli a{font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.15em;color:rgba(240,232,208,.35);text-decoration:none;transition:color .3s}
.foli a:hover{color:var(--cr)}
.foc{font-size:.75rem;color:rgba(240,232,208,.22);letter-spacing:.05em}
@keyframes fu{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.rv{opacity:0;transform:translateY(40px);transition:opacity .8s ease,transform .8s ease}
.rv.vis{opacity:1;transform:translateY(0)}
@media(max-width:768px){nav{padding:14px 18px}.nv{display:none}.steps,.fg,.ftg,.aif,.tbr,.fw{grid-template-columns:1fr}.steps::before{display:none}h1.hh{font-size:2.3rem}.hb{flex-direction:column;align-items:center}.t200{width:170px;height:170px}.tbn{font-size:2.8rem}}
@media(min-width:769px) and (max-width:1024px){.fg{grid-template-columns:repeat(2,1fr)}.ftg{grid-template-columns:1fr}.aif{grid-template-columns:repeat(2,1fr)}}
`;

export default function HomeClient() {
  useEffect(() => {
    // STARFIELD
    const canvas = document.getElementById("starfield") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    type Star = { x: number; y: number; r: number; spd: number; ph: number; gold: boolean };
    let stars: Star[] = [];
    let W = 0, H = 0;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    function initStars() {
      stars = [];
      const n = Math.floor((W * H) / 2800);
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.3 + 0.2,
          spd: Math.random() * 0.006 + 0.002,
          ph: Math.random() * Math.PI * 2,
          gold: Math.random() > 0.85,
        });
      }
    }
    let t = 0;
    let animId = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (const s of stars) {
        const a = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t * s.spd + s.ph));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.gold
          ? `rgba(212,175,55,${a * 0.8})`
          : `rgba(192,132,252,${a * 0.55})`;
        ctx.fill();
      }
      t += 0.5;
      animId = requestAnimationFrame(draw);
    }
    resize();
    initStars();
    draw();
    const handleResize = () => { resize(); initStars(); };
    window.addEventListener("resize", handleResize);

    // NAV SCROLL
    const nav = document.getElementById("main-nav");
    const handleScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);

    // SCROLL REVEAL
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vis"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".rv").forEach((r) => obs.observe(r));

    // FAQ
    document.querySelectorAll(".fqq").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".fqi");
        const open = item?.classList.contains("open");
        document.querySelectorAll(".fqi").forEach((i) => {
          i.classList.remove("open");
          i.querySelector(".fqq")?.setAttribute("aria-expanded", "false");
        });
        if (!open) {
          item?.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });

    // DEVICE DETECTION
    const ua = navigator.userAgent || navigator.vendor || "";
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !(window as Window & { MSStream?: unknown }).MSStream;
    const isAndroid = /android/i.test(ua);
    const storeUrl = "https://www.remil.app";
    if (isIOS || isAndroid) {
      const mainCta = document.getElementById("main-cta");
      if (mainCta) mainCta.setAttribute("href", storeUrl);
      const h = isIOS ? "ios" : "android";
      ["ios-badge", "android-badge", "ios-badge-cta", "android-badge-cta"].forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.add(id.startsWith(h) ? "sbhi" : "sbdim");
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animId);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <canvas id="starfield" aria-hidden="true"></canvas>

      <nav id="main-nav" role="navigation" aria-label="Ana menü">
        <a href="/" className="nl" aria-label="Remil Ana Sayfa">Rem<span>il</span></a>
        <ul className="nv">
          <li><a href="#nasil-calisir">Nasıl Çalışır</a></li>
          <li><a href="#falcilar">Falcılar</a></li>
          <li><a href="#fal-turleri">Fal Türleri</a></li>
          <li><a href="#fiyatlandirma">Fiyatlar</a></li>
          <li><a href="#indir" className="nc">Hemen Başla</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero" id="home" role="banner">
        <p className="hey">✦ Türkiye&apos;nin Yapay Zeka Destekli Fal Uygulaması ✦</p>
        <h1 className="hh">Kaderine Bak,<br /><em>Geleceğini Gör</em></h1>

        <div className="tb200" role="note" aria-label="İlk üyelikte 200 token hediye">
          <span style={{ color: "rgba(240,232,208,.6)", fontSize: ".72rem", letterSpacing: ".1em" }}>İLK ÜYELİKTE</span>
          <span className="tc">200</span>
          <span style={{ letterSpacing: ".12em" }}>TOKEN HEDİYE</span>
          <span style={{ fontSize: "1.3rem" }}>🎁</span>
        </div>

        <p className="hs">Birbirinden farklı kişiliklere sahip AI falcılarla kahve falı, el falı, yüz falı ve ilişki falı — sadece sana özel yorumlar.</p>

        <div className="hb">
          <a href="#indir" className="bp" id="main-cta">🔮 Ücretsiz Başla</a>
          <a href="#falcilar" className="bs">Falcıları Tanı →</a>
        </div>

        <div className="hv" aria-hidden="true">
          <div className="pw">
            <div className="ring"></div><div className="ring"></div><div className="ring"></div>
            <div className="pf">
              <div className="pno"></div>
              <div className="psc">
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".48rem", color: "rgba(156,89,232,.7)", letterSpacing: ".2em", textAlign: "center", padding: "4px 0 8px" }}>FALCILARIM</div>
                <div className="pc"><div className="pa">👵</div><div className="pi"><div className="pn2">Mediha Hala</div><div className="pd2">Mahalle Büyüğü • 20🪙</div></div><div className="pb2 bon">Online</div></div>
                <div className="pc"><div className="pa">🌙</div><div className="pi"><div className="pn2">Acem Kızı Leyla</div><div className="pd2">Mistik Yorumcu • 25🪙</div></div><div className="pb2 bon">Online</div></div>
                <div className="pc"><div className="pa">🧔</div><div className="pi"><div className="pn2">Dede Ahmet</div><div className="pd2">Bilge Kahin • 30🪙</div></div><div className="pb2 bbu">Meşgul</div></div>
                <div style={{ marginTop: "12px", background: "rgba(108,59,189,.2)", borderRadius: "8px", padding: "14px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.3rem", marginBottom: "5px" }}>☕</div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".48rem", color: "var(--cr)", letterSpacing: ".1em" }}>Kahve Falı Gönder</div>
                  <div style={{ fontSize: ".42rem", color: "rgba(240,232,208,.4)", marginTop: "3px" }}>Fincanını fotoğrafla</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sbs" id="hero-badges" aria-label="Uygulama indirme bağlantıları">
          <a href="https://www.remil.app" className="sb" id="ios-badge" target="_blank" rel="noopener" aria-label="App Store'dan İndir">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" /></svg>
            <div className="sbt"><span className="sbsub">App Store&apos;dan İndir</span><span className="sbname">Apple Store</span></div>
          </a>
          <a href="https://www.remil.app" className="sb" id="android-badge" target="_blank" rel="noopener" aria-label="Google Play'den İndir">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3.18 23.76c.37.21.79.24 1.18.09l12.47-7.19-2.55-2.55zm16.44-9.7L17 12.46l-2.82 2.82 2.82 2.82 2.64-1.54c.75-.43.75-1.56-.02-2zM3 1.73c-.05.14-.07.32-.07.5v19.54c0 .19.02.37.07.51l.06.05 10.95-10.97v-.25L3.06 1.68zm9.45 9.54l2.55-2.55L2.53 1.58A1.3 1.3 0 0 0 1.18.6z" /></svg>
            <div className="sbt"><span className="sbsub">Google Play&apos;den İndir</span><span className="sbname">Google Play</span></div>
          </a>
        </div>
      </header>

      <div className="dv"></div>

      {/* NASIL ÇALIŞIR */}
      <section id="nasil-calisir" aria-labelledby="nt">
        <div className="con">
          <p className="slb rv">Süreç</p>
          <h2 className="st rv" id="nt">Üç Adımda <em>Falına Bak</em></h2>
          <p className="ss rv">Dakikalar içinde kişiselleştirilmiş fal yorumuna ulaş. Kayıt olmak ve başlamak tamamen ücretsiz.</p>
          <div className="steps">
            <div className="step rv"><div className="snum">①</div><h3>Fotoğrafını Yükle</h3><p>Kahve fincanını, avuç içini ya da yüzünü fotoğrafla ve uygulamaya yükle. AI anında görsel analizi başlatır.</p></div>
            <div className="step rv" style={{ transitionDelay: ".15s" }}><div className="snum">②</div><h3>Falcını Seç</h3><p>Altı özgün falcı karakterinden birini seç. Her biri farklı kişilik, farklı yorum tarzı ve farklı derinlik sunar.</p></div>
            <div className="step rv" style={{ transitionDelay: ".3s" }}><div className="snum">③</div><h3>Yorumunu Al</h3><p>Falcın hazırladığında bildirim gelir. Bulanık ekranı aç, sana özel mistik yorumunu keşfet.</p></div>
          </div>
        </div>
      </section>

      <div className="dv"></div>

      {/* 200 TOKEN */}
      <section className="tfs" aria-labelledby="tt">
        <div className="tfi">
          <p className="slb rv">Hoş Geldin Hediyesi</p>
          <h2 className="st rv" id="tt">İlk Üyelikte <em>200 Token</em> Hediye</h2>
          <p className="ss rv" style={{ marginBottom: "40px" }}>Remil&apos;e katıldığında seni büyük bir hoş geldin sürpriziyle karşılıyoruz. Kredi kartı gerekmez, hemen falına başla.</p>
          <div className="t200 rv" aria-label="200 token hediye">
            <div className="tbn">200</div>
            <div className="tbl">TOKEN</div>
          </div>
          <div className="tbr rv">
            <div className="tbi"><div className="tbn2">20 🪙</div><div className="tbl2">Uygulamaya<br />girerken hemen</div></div>
            <div className="tbi"><div className="tbn2">+180 🪙</div><div className="tbl2">Üye olunca<br />anında hediye</div></div>
            <div className="tbi"><div className="tbn2">= 200 🪙</div><div className="tbl2">Toplam<br />başlangıç bakiyesi</div></div>
          </div>
          <div className="tei2 rv">
            <div className="te">📺 Günde 5 reklam → +30 token kazan</div>
            <div className="te">🔮 Ekonomik fallar 20–30 token</div>
            <div className="te">✨ Premium fallar 35–50 token</div>
          </div>
          <div style={{ marginTop: "36px" }} className="rv">
            <a href="#indir" className="bp" style={{ fontSize: ".9rem", padding: "18px 48px" }}>🎁 200 Token ile Başla</a>
          </div>
        </div>
      </section>

      <div className="dv"></div>

      {/* FALCILAR */}
      <section id="falcilar" aria-labelledby="flrt">
        <div className="con">
          <p className="slb rv">Karakterler</p>
          <h2 className="st rv" id="flrt">Remil&apos;in <em>Falcıları</em></h2>
          <p className="ss rv">Her falcı Claude AI tarafından güçlendirilen özgün bir kişiliktir. Aynı fotoğrafa farklı falcılar farklı yorumlar getirir — hiçbiri birbirine benzemez.</p>
          <div className="fg">
            <article className="fc rv"><span className="fav" role="img" aria-label="Mediha Hala">👵</span><div className="fn">Mediha Hala</div><div className="ftl">Mahalle Büyüğü</div><p className="fd">&quot;Kızım&quot; diye hitap eder, hem sever hem azarlar. Mahallenin en bilge kadını olarak yılların birikimini sıcak ve samimi yorumlara döker. Gerçeği duymak için doğru adres.</p><div className="ff"><div className="fp">🪙 20 Token</div><span className="fst son">7/24 Online</span></div></article>
            <article className="fc rv" style={{ transitionDelay: ".1s" }}><span className="fav" role="img" aria-label="Acem Kızı Leyla">🌙</span><div className="fn">Acem Kızı Leyla</div><div className="ftl">Mistik Yorumcu</div><p className="fd">Şiirsel ve gizemli. Soğuk ama çekici anlatımıyla her yorumu neredeyse bir şiir gibi akar. Derinlik arayanlar için biçilmiş kaftan.</p><div className="ff"><div className="fp">🪙 25 Token</div><span className="fst son">7/24 Online</span></div></article>
            <article className="fc rv" style={{ transitionDelay: ".2s" }}><span className="fav" role="img" aria-label="Dede Ahmet">🧔</span><div className="fn">Dede Ahmet</div><div className="ftl">Bilge Kahin</div><p className="fd">Sert, gerçekçi ve az konuşur. Ama söylediği her kelime yerini bulur. Süslü laflardan sıkıldıysan, Dede Ahmet seni bekliyor.</p><div className="ff"><div className="fp">🪙 30 Token</div><span className="fst sof">Zaman Zaman Online</span></div></article>
            <article className="fc rv" style={{ transitionDelay: ".1s" }}><span className="fav" role="img" aria-label="Aren Hatun">✨</span><div className="fn">Aren Hatun</div><div className="ftl">Eğlenceli Falcı</div><p className="fd">Güldürürken düşündürür. Yorumlarına neşe ve espri katmak isteyenler için ideal. Komik cümleler arasında saklanan gerçekler sürpriz yapabilir.</p><div className="ff"><div className="fp">🪙 35 Token</div><span className="fst son">7/24 Online</span></div></article>
            <article className="fc rv" style={{ transitionDelay: ".2s" }}><span className="fav" role="img" aria-label="Sinem Bacı">👩</span><div className="fn">Sinem Bacı</div><div className="ftl">Mahallenin Bilirkişisi</div><p className="fd">İlişkiler ve kadın meselelerinde Remil&apos;in en uzman sesi. Kalbinin derinliklerine inen içten yorumlarıyla özellikle aşk ve ilişki konularında çok güçlü.</p><div className="ff"><div className="fp">🪙 40 Token</div><span className="fst slim">12:00 – 18:00</span></div></article>
            <article className="fc rv" style={{ transitionDelay: ".3s" }}><span className="fav" role="img" aria-label="Mecnun Giassar">🧳</span><div className="fn">Mecnun Giassar</div><div className="ftl">Dünya Gezgini</div><p className="fd">40 ülke gezmiş, yedi dil bilen entelektüel bir kahin. Yorumlarına dünyanın farklı kültürlerinden perspektifler katar. Ufuk genişletmek isteyenler için.</p><div className="ff"><div className="fp">🪙 50 Token</div><span className="fst slim">15:00 – 21:00</span></div></article>
          </div>
        </div>
      </section>

      <div className="dv"></div>

      {/* FAL TÜRLERİ */}
      <section id="fal-turleri" aria-labelledby="ftit" style={{ background: "linear-gradient(to bottom,transparent,rgba(26,15,61,.15),transparent)" }}>
        <div className="con">
          <p className="slb rv">Fal Türleri</p>
          <h2 className="st rv" id="ftit">Hangi Falı <em>Seçersin?</em></h2>
          <p className="ss rv">Her fal türü farklı bir kapı açar. Kahve fincanından yüzüne, avuç içinden ilişkine — Remil&apos;in AI teknolojisi hepsini derin yorumlarla karşılar.</p>
          <div className="ftg">
            <article className="ftc rv">
              <div className="fch"><span className="fib" role="img" aria-label="Kahve Falı">☕</span><div><div className="fct">Kahve Falı</div><div className="fcs">Türk Kahvesi Fincanı Analizi</div></div></div>
              <p>Türk kahvesi içtikten sonra fincanı ters çevir, soğumasını bekle ve fotoğrafını çek. Remil&apos;in AI teknolojisi fincanındaki şekilleri, sembolleri ve biçimleri analiz ederek hayatının farklı alanlarına dair yorumlar üretir.</p>
              <p>Tek bir fotoğrafla sınırlı değilsin — 4 farklı açıdan fotoğraf yükleyerek çok daha kapsamlı ve detaylı bir yorum alabilirsin. Her falcı aynı fincanı kendi üslubuyla okur.</p>
              <ul className="fdl"><li>1 ila 4 fotoğraf yüklenebilir — ne kadar çok, o kadar derin yorum</li><li>Fincan tabanı, yanları ve sapı ayrı ayrı analiz edilir</li><li>Aşk, kariyer, para ve sağlık temalarını kapsar</li></ul>
            </article>
            <article className="ftc rv" style={{ transitionDelay: ".1s" }}>
              <div className="fch"><span className="fib" role="img" aria-label="El Falı">✋</span><div><div className="fct">El Falı</div><div className="fcs">Kişisel Yorum + Astroloji</div></div></div>
              <p>Avuç içinin fotoğrafı ve doğum tarihinle Remil, parmoloji ile astrolojiyi harmanlayarak sana özel bir kader haritası çıkarır. El çizgilerin — yaşam, kalp, akıl ve kader çizgileri — AI tarafından derinlemesine incelenir.</p>
              <p>El falı, Remil&apos;in en kişiselleştirilmiş fal türüdür. Çünkü iki kişinin eli birbirinin aynısı değildir. Doğum tarihinle burç karakteristiğin de yoruma eklenerek hayat yolun ortaya çıkarılır.</p>
              <ul className="fdl"><li>Dominant veya her iki el analiz edilebilir</li><li>Doğum tarihi + burç entegrasyonu ile derinleşen yorum</li><li>Kader, aşk ve yaşam çizgisi analizi</li></ul>
            </article>
            <article className="ftc rv" style={{ transitionDelay: ".2s" }}>
              <div className="fch"><span className="fib" role="img" aria-label="Yüz Falı">👤</span><div><div className="fct">Yüz Falı</div><div className="fcs">Yüz Analizi + Doğum Haritası</div></div></div>
              <p>Yüz okuma, binlerce yıllık bir gelenektir. Remil bunu modern AI ile buluşturur: yüz hatların ve astrolojik doğum haritanı birleştirerek kapsamlı bir kişilik ve kader yorumu sunar.</p>
              <p>Doğum tarihi, saati ve doğum yeri bilgilerinle hazırlanan yüz falı; karakterinin güçlü yönlerini, potansiyel engellerini ve bu dönemde seni bekleyen fırsatları ortaya koyar.</p>
              <ul className="fdl"><li>Fizyonomi + astroloji entegrasyonu</li><li>Doğum saati ve yeri ile kişisel harita hesabı</li><li>Kişilik profili, kader yorumu ve dönemsel analiz</li></ul>
            </article>
            <article className="ftc rv" style={{ transitionDelay: ".3s" }}>
              <div className="fch"><span className="fib" role="img" aria-label="İlişki Falı">💑</span><div><div className="fct">İlişki Falı</div><div className="fcs">İki Kişi, Tek Yorum</div></div></div>
              <p>İki kişinin fotoğrafı — seninki ve partnerinin, arkadaşının ya da merak ettiğin birinin — Remil&apos;e yüklenir. AI, iki kişinin yüz hatlarını ve enerjilerini analiz ederek ilişkinin dinamiklerini yorumlar.</p>
              <p>Bu fal türü; mevcut bir ilişkiyi anlamak, potansiyel bir birlikteliği değerlendirmek ya da iki kişi arasındaki uyumu keşfetmek isteyenler için tasarlanmıştır.</p>
              <ul className="fdl"><li>İki kişinin fotoğrafı ile birlikte analiz</li><li>Uyum, çekim ve potansiyel çatışma yorumu</li><li>Geçmiş, şimdiki durum ve geleceğe dair tahminler</li></ul>
            </article>
            <article className="ftc cs rv" style={{ transitionDelay: ".2s" }}>
              <span className="ctag">Yakında</span>
              <div className="fch"><span className="fib" role="img" aria-label="Tarot">🃏</span><div><div className="fct">Tarot</div><div className="fcs">78 Kart, Sonsuz Yorum</div></div></div>
              <p>Evrenin mesajlarını 78 kartın dilinden okumak. AI falcıların rehberliğinde klasik tarot geleneği modern yorumla buluşuyor.</p>
              <ul className="fdl"><li>Major ve Minor Arcana kartları</li><li>Celtic Cross ve diğer dizilimler</li><li>Günlük, haftalık ve dönemsel okumalar</li></ul>
            </article>
            <article className="ftc cs rv" style={{ transitionDelay: ".3s" }}>
              <span className="ctag">Yakında</span>
              <div className="fch"><span className="fib" role="img" aria-label="Numeroloji">🔢</span><div><div className="fct">Numeroloji</div><div className="fcs">Sayıların Sırrı</div></div></div>
              <p>Adın ve doğum tarihinin içinde gizli mesajlar var. Numeroloji, bu sayıların frekanslarını çözerek hayat amacını ve temel doğanı ortaya koyar.</p>
              <ul className="fdl"><li>Yaşam yolu, ifade ve ruh sayısı hesabı</li><li>Kişisel yıl ve dönem analizi</li><li>İsim enerji profili</li></ul>
            </article>
          </div>
        </div>
      </section>

      <div className="dv"></div>

      {/* AI FARKI */}
      <section id="teknoloji" aria-labelledby="ait" style={{ background: "linear-gradient(to bottom,transparent,rgba(26,15,61,.2),transparent)" }}>
        <div className="con">
          <p className="slb rv">Teknoloji</p>
          <h2 className="st rv" id="ait">Hep Aynı Cevap <em>Gelmez</em></h2>
          <p className="ss rv">Remil&apos;i rakiplerinden ayıran fark: gerçek yapay zeka gücü ve özgün karakter sistemi. Her yorum, gerçekten sana özel üretilir.</p>
          <div className="aif">
            <div className="af rv"><span className="afi" role="img" aria-label="AI">🧠</span><h3>Claude AI Gücü</h3><p>Anthropic&apos;in Claude modeli ile her fotoğraf ve bilgi derinlemesine işlenir. Yüzeysel, hazır kalıp cevaplar değil; gerçekten düşünülmüş, bağlam duyarlı yorumlar üretilir.</p></div>
            <div className="af rv" style={{ transitionDelay: ".12s" }}><span className="afi" role="img" aria-label="Karakterler">🎭</span><h3>Özgün Karakterler</h3><p>Her falcı kendi ağzından konuşur. Mediha Hala ile Mecnun Giassar&apos;a aynı fincan fotoğrafı göster — iki yorum birbirinden tamamen farklı olacak.</p></div>
            <div className="af rv" style={{ transitionDelay: ".24s" }}><span className="afi" role="img" aria-label="Astroloji">♈</span><h3>Astroloji Entegrasyonu</h3><p>Doğum tarihi, saati ve yerin ile burç hesabı ve doğum haritası yorumu fallarına otomatik eklenir.</p></div>
            <div className="af rv" style={{ transitionDelay: ".12s" }}><span className="afi" role="img" aria-label="Görsel Analiz">📷</span><h3>Gerçek Görsel Analiz</h3><p>Fotoğraflar doğrudan AI&apos;ye aktarılır ve gerçekten analiz edilir. Fincanındaki semboller, el çizgilerin, yüz hatların — hepsi okunur, rastgele üretilmez.</p></div>
            <div className="af rv" style={{ transitionDelay: ".24s" }}><span className="afi" role="img" aria-label="Moderasyon">😄</span><h3>Akıllı Moderasyon</h3><p>Yanlış fotoğraf yüklersen esprili bir uyarı alırsın: &quot;Bu bir kedi mi? Kedilerin falı başka departman 🐱&quot; — deneyimin başından sonuna tutarlı ve kaliteli.</p></div>
            <div className="af rv" style={{ transitionDelay: ".36s" }}><span className="afi" role="img" aria-label="Gerçekçilik">🔔</span><h3>Gerçekçi Bekleme</h3><p>Falcın gerçekten zaman harcar gibi görünür — bekleme süreci heyecanı artırır. Hazır olunca bildirim gelir, bulanık yorumu kendin açarsın.</p></div>
          </div>
        </div>
      </section>

      <div className="dv"></div>

      {/* FIYATLANDIRMA */}
      <section id="fiyatlandirma" aria-labelledby="fyt">
        <div className="con">
          <p className="slb rv">Fiyatlar</p>
          <h2 className="st rv" id="fyt">Herkese Uygun <em>Paketler</em></h2>
          <p className="ss rv">İlk 200 token&apos;ın bittikten sonra da uygun fiyatlı paketlerle yoluna devam et. Ya da premium üye ol, her ay 100 token hediye kazan.</p>
          <div className="fw">
            <div className="rv">
              <p className="ttl">TOKEN PAKETLERİ</p>
              <div className="tp"><div className="ta">🪙 <strong>100 Token</strong></div><div className="tpr">49 ₺</div></div>
              <div className="tp"><div className="ta">🪙 <strong>250 Token</strong></div><div className="tpr">99 ₺</div></div>
              <div className="tp"><div className="ta">🪙 <strong>500 Token</strong></div><div className="tpr">149 ₺</div></div>
              <div style={{ marginTop: "20px", padding: "20px", background: "rgba(156,89,232,.07)", border: "1px solid rgba(156,89,232,.18)", borderRadius: "4px" }}>
                <p style={{ fontFamily: "'Cinzel',serif", fontSize: ".62rem", letterSpacing: ".2em", color: "var(--am)", marginBottom: "10px" }}>ÜCRETSİZ TOKEN KAZAN</p>
                <p style={{ fontSize: ".9rem", color: "rgba(240,232,208,.65)", lineHeight: "1.6" }}><strong style={{ color: "var(--cr)" }}>200 token</strong> üye olunca hediye · Günde 5 reklam izleyerek <strong style={{ color: "var(--cr)" }}>+30 token</strong> kazan</p>
              </div>
            </div>
            <div className="prc rv" style={{ transitionDelay: ".2s" }}>
              <span className="pbt">✦ EN İYİ DEĞER</span>
              <h3>Premium Üyelik</h3>
              <p style={{ fontSize: ".88rem", color: "rgba(240,232,208,.5)" }}>Sınırsız mistik deneyim</p>
              <div className="ppb">199 ₺</div>
              <p className="pps">/ yıllık · Aylık sadece ~16,6 ₺</p>
              <ul className="pfl"><li>Reklamsız kesintisiz deneyim</li><li>Her ay 100 token hediye</li><li>Öncelikli falcı erişimi</li><li>Tüm falcılara tam erişim</li></ul>
              <a href="#indir" className="bp" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>Premium Başla</a>
              <p style={{ marginTop: "14px", textAlign: "center", fontSize: ".82rem", color: "rgba(156,89,232,.75)" }}>İlk <strong style={{ color: "var(--am)" }}>200 token</strong> ücretsiz — kredi kartı gerekmez</p>
            </div>
          </div>
        </div>
      </section>

      <div className="dv"></div>

      {/* SSS */}
      <section id="sss" aria-labelledby="faqt">
        <div className="con">
          <p className="slb rv">SSS</p>
          <h2 className="st rv" id="faqt">Merak <em>Edilenler</em></h2>
          <p className="ss rv">Aklında soru işareti kalmasın.</p>
          <div className="fql rv">
            <div className="fqi" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <button className="fqq" aria-expanded="false" itemProp="name">Remil gerçekten yapay zeka mı kullanıyor? <span className="fi">+</span></button>
              <div className="fqa" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><div className="fqai" itemProp="text">Evet. Remil, Anthropic&apos;in geliştirdiği Claude AI modelini kullanır. Fotoğraflarınız doğrudan bu modele aktarılır ve gerçek bir görüntü analizi yapılır. Hazır kalıp cevaplar veya rastgele seçilen metinler yoktur — her yorum, o fotoğrafa ve o falcı karakterine özel üretilir.</div></div>
            </div>
            <div className="fqi" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <button className="fqq" aria-expanded="false" itemProp="name">200 token ne kadar fal yapmama yeter? <span className="fi">+</span></button>
              <div className="fqa" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><div className="fqai" itemProp="text">En ekonomik falcı Mediha Hala ile 200 token&apos;la 10 fala bakılabilir (her biri 20 token). Orta segment falcılar 25–30 token, premium falcılar 35–50 token alır. 200 token, başlangıç için oldukça cömert bir bakiye — birden fazla fal türünü deneyimlemek için yeterlidir.</div></div>
            </div>
            <div className="fqi" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <button className="fqq" aria-expanded="false" itemProp="name">Fotoğraflarım güvende mi? <span className="fi">+</span></button>
              <div className="fqa" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><div className="fqai" itemProp="text">Fotoğraflarınız yalnızca yorum üretmek amacıyla AI modeline iletilir. Remil, kullanıcı gizliliğine büyük önem verir. Fotoğraflarınız üçüncü taraflarla paylaşılmaz.</div></div>
            </div>
            <div className="fqi" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <button className="fqq" aria-expanded="false" itemProp="name">Falım neden hemen gelmiyor? <span className="fi">+</span></button>
              <div className="fqa" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><div className="fqai" itemProp="text">Remil, gerçek bir falcı deneyimi yaratmak için kasıtlı bir bekleme süresi kullanır. Ekonomik falcılar ~5 dakika, premium falcılar ~10 dakika çalışır. Falcı meşgulse ek 5 dakika eklenebilir. Hazır olduğunda push bildirimi gelir.</div></div>
            </div>
            <div className="fqi" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <button className="fqq" aria-expanded="false" itemProp="name">Play Store&apos;daki &quot;Remil Kum Falı&quot; uygulamasıyla ilişkiniz var mı? <span className="fi">+</span></button>
              <div className="fqa" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><div className="fqai" itemProp="text">Hayır, hiçbir ilişkimiz yoktur. &quot;Remil Kum Falı&quot; farklı bir geliştirici tarafından yapılmış ayrı bir uygulamadır. Remil (remil.com.tr), Claude AI destekli modern fal deneyimi sunan bağımsız bir Türk uygulamasıdır. Resmi sitemiz: remil.com.tr</div></div>
            </div>
          </div>
        </div>
      </section>

      <div className="dv"></div>

      {/* DOWNLOAD CTA */}
      <section className="dcta" id="indir" aria-labelledby="indt">
        <div className="con" style={{ position: "relative", zIndex: 1 }}>
          <div className="ftb">✦ İLK ÜYELİKTE 200 TOKEN HEDİYE ✦</div>
          <h2 id="indt">Kaderine Bakmaya<br /><em>Hazır Mısın?</em></h2>
          <p>Remil&apos;e katıl, AI destekli falcılarla mistik yolculuğuna başla. Ücretsiz başla — 200 token, kredi kartı gerekmez.</p>
          <div className="sbs" style={{ opacity: 1, animation: "none" }} id="cta-badges">
            <a href="https://www.remil.app" className="sb" id="ios-badge-cta" target="_blank" rel="noopener" aria-label="App Store'dan İndir">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" /></svg>
              <div className="sbt"><span className="sbsub">App Store&apos;dan İndir</span><span className="sbname">Apple Store</span></div>
            </a>
            <a href="https://www.remil.app" className="sb" id="android-badge-cta" target="_blank" rel="noopener" aria-label="Google Play'den İndir">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3.18 23.76c.37.21.79.24 1.18.09l12.47-7.19-2.55-2.55zm16.44-9.7L17 12.46l-2.82 2.82 2.82 2.82 2.64-1.54c.75-.43.75-1.56-.02-2zM3 1.73c-.05.14-.07.32-.07.5v19.54c0 .19.02.37.07.51l.06.05 10.95-10.97v-.25L3.06 1.68zm9.45 9.54l2.55-2.55L2.53 1.58A1.3 1.3 0 0 0 1.18.6z" /></svg>
              <div className="sbt"><span className="sbsub">Google Play&apos;den İndir</span><span className="sbname">Google Play</span></div>
            </a>
          </div>
          <div className="slks">
            <a href="https://instagram.com/remil.app" target="_blank" rel="noopener">Instagram @remil.app</a>
            <a href="https://tiktok.com/@remil" target="_blank" rel="noopener">TikTok @remil</a>
            <a href="mailto:destek@remil.com.tr">destek@remil.com.tr</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="foi">
          <div className="fol">Rem<span>il</span></div>
          <ul className="foli">
            <li><a href="#nasil-calisir">Nasıl Çalışır</a></li>
            <li><a href="#falcilar">Falcılar</a></li>
            <li><a href="#fal-turleri">Fal Türleri</a></li>
            <li><a href="#fiyatlandirma">Fiyatlar</a></li>
            <li><a href="#sss">SSS</a></li>
            <li><a href="mailto:destek@remil.com.tr">Destek</a></li>
            <li><a href="/gizlilik">Gizlilik</a></li>
            <li><a href="/kullanim-kosullari">Kullanım Koşulları</a></li>
          </ul>
          <p className="foc">© 2025 Remil · remil.com.tr</p>
        </div>
      </footer>
    </>
  );
}
