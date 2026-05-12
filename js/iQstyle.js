        /* Container for images in a single row*/
        .image-row {
            display: flex;              /* Places items in a row */
            justify-content: center;    /* Centers them horizontally */
            align-items: center;        /* Aligns them vertically */
            gap: 20px;                   /* Space between images */
            margin-top: 50px;
        }

        /* Make images responsive */
        .image-row img {
            max-width: auto;  /* Limit width */
            height: 75px;      /* Keep aspect ratio */
            border: 0px solid #ccc; /* Thickness of the border*/
            border-radius: 0px; /* Border corner radius = border means circle/ellipse*/
        }	

:root{--ink:#16213e;--ink2:#1a2b5e;--amb:#c47f17;--amb2:#e9a528;--sand:#f5f0e8;--wh:#fff;--muted:#6b7a99;--light:#a8b4cc;--ok:#1d7a47;--okbg:#d2f0e0;--warn:#9a5c00;--warnbg:#fef0cc;--err:#9b1c1c;--errbg:#fde8e8;--ibg:#dbeafe;--ifc:#1e3a8a;--bdr:rgba(22,33,62,.10);--sh:0 2px 16px rgba(22,33,62,.09);--sh2:0 8px 40px rgba(22,33,62,.14);--r:12px;--rl:20px}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Sora',sans-serif;background:var(--sand);color:var(--ink);min-height:100vh;font-size:14px}
.hidden{display:none!important}
.badge{display:inline-block;padding:2px 9px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
.bok{background:var(--okbg);color:var(--ok)}.bwarn{background:var(--warnbg);color:var(--warn)}.berr{background:var(--errbg);color:var(--err)}.binfo{background:var(--ibg);color:var(--ifc)}.bneu{background:#e5e7eb;color:#374151}

/* NAV */
#nav{background:var(--ink);height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 1.5rem;position:sticky;top:0;z-index:50;box-shadow:0 2px 20px rgba(0,0,0,.3)}
.nbrand{display:flex;align-items:center;gap:10px}
.ngem{width:34px;height:34px;background:var(--amb);border-radius:9px;display:flex;align-items:center;justify-content:center;font-family:'Lora',serif;font-size:16px;color:var(--ink);font-weight:600}
.nname{font-family:'Lora',serif;color:#fff;font-size:16px}.nname em{color:var(--amb2);font-style:normal}
.nright{display:flex;align-items:center;gap:8px}
.nchip{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);border-radius:9px;padding:5px 10px}
.nav{width:26px;height:26px;border-radius:50%;background:var(--amb);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:var(--ink)}
.nun{color:#fff;font-size:13px;font-weight:500}.nur{color:rgba(255,255,255,.45);font-size:10px}
#bout{background:none;border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.55);padding:5px 12px;border-radius:8px;cursor:pointer;font-size:12px;font-family:'Sora',sans-serif;transition:.2s}
#bout:hover{background:rgba(192,57,43,.25);color:#ff8a8a;border-color:rgba(192,57,43,.4)}

/* PAGES */
.page{display:none;min-height:calc(100vh - 60px)}.page.on{display:block}

/* LOGIN */
#pg-login{display:flex;align-items:center;justify-content:center;min-height:100vh;background:var(--ink);position:relative;overflow:hidden}
#pg-login::before{content:'';position:absolute;width:700px;height:700px;background:radial-gradient(circle,rgba(196,127,23,.14) 0%,transparent 70%);top:-200px;right:-200px;border-radius:50%}
#pg-login::after{content:'';position:absolute;width:400px;height:400px;background:radial-gradient(circle,rgba(196,127,23,.08) 0%,transparent 70%);bottom:-100px;left:-100px;border-radius:50%}
.lcard{background:#fff;border-radius:var(--rl);padding:2.5rem;width:430px;position:relative;z-index:1;box-shadow:var(--sh2)}
.lhdr{text-align:center;margin-bottom:1.75rem}
.lico{width:66px;height:66px;background:var(--ink);border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem}
.lico svg{width:34px;height:34px;color:var(--amb)}
.lhdr h1{font-family:'Lora',serif;font-size:22px;color:var(--ink);margin-bottom:3px}
.lhdr p{color:var(--muted);font-size:13px}
.ltabs{display:flex;background:var(--sand);border-radius:10px;padding:3px;margin-bottom:1.5rem}
.ltab{flex:1;text-align:center;padding:8px;border-radius:8px;cursor:pointer;font-size:13px;font-weight:500;color:var(--muted);border:none;background:none;font-family:'Sora',sans-serif;transition:.2s}
.ltab.on{background:var(--ink);color:#fff;box-shadow:0 2px 8px rgba(22,33,62,.2)}
.fg{margin-bottom:.9rem}.fl{display:block;font-size:12px;font-weight:600;color:var(--ink);margin-bottom:5px;letter-spacing:.01em}
.fi{width:100%;padding:10px 13px;border:1.5px solid var(--bdr);border-radius:10px;font-size:13px;font-family:'Sora',sans-serif;color:var(--ink);background:#fff;outline:none;transition:.2s}
.fi:focus{border-color:var(--ink);box-shadow:0 0 0 3px rgba(22,33,62,.07)}
.fn{font-size:11px;color:var(--light);margin-top:3px}
.bp{width:100%;padding:12px;background:var(--ink);color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:500;font-family:'Sora',sans-serif;cursor:pointer;transition:.2s;margin-top:.4rem}
.bp:hover{background:var(--ink2);transform:translateY(-1px);box-shadow:0 4px 14px rgba(22,33,62,.3)}
.bs{padding:9px 18px;background:transparent;color:var(--ink);border:1.5px solid var(--ink);border-radius:10px;font-size:13px;font-weight:500;font-family:'Sora',sans-serif;cursor:pointer;transition:.2s}
.bs:hover{background:var(--sand)}
.ba{padding:8px 16px;background:var(--amb);color:var(--ink);border:none;border-radius:10px;font-size:13px;font-weight:600;font-family:'Sora',sans-serif;cursor:pointer;transition:.2s}
.ba:hover{background:var(--amb2)}
.bsm{padding:5px 12px;font-size:11px;border-radius:8px}
.bd{padding:5px 12px;background:#fde8e8;color:#9b1c1c;border:none;border-radius:8px;font-size:11px;font-weight:500;font-family:'Sora',sans-serif;cursor:pointer;transition:.2s}
.bd:hover{background:#fca5a5}
.ale{padding:9px 12px;border-radius:9px;font-size:12px;margin-bottom:.9rem}
.ae{background:var(--errbg);color:var(--err);border:1px solid #fca5a5}
.as2{background:var(--okbg);color:var(--ok);border:1px solid #6ee7a0}
.ai2{background:var(--ibg);color:var(--ifc);border:1px solid #93c5fd}
.fup{border:2px dashed var(--bdr);border-radius:10px;padding:1.2rem;text-align:center;cursor:pointer;transition:.2s;position:relative;margin-bottom:.6rem}
.fup:hover{border-color:var(--ink);background:#f0f2f8}
.fup input{position:absolute;inset:0;opacity:0;cursor:pointer}
.fup svg{width:26px;height:26px;color:var(--light);margin-bottom:6px}
.fup p{font-size:12px;color:var(--muted)}.fup span{font-size:11px;color:var(--light)}

/* APP LAYOUT */
.alayout{display:grid;grid-template-columns:220px 1fr;min-height:calc(100vh - 60px)}
.sidebar{background:#fff;border-right:1px solid var(--bdr);padding:1.25rem 0;position:sticky;top:60px;height:calc(100vh - 60px);overflow-y:auto}
.slbl{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--light);padding:0 1.1rem;margin:1rem 0 .35rem}
.si{display:flex;align-items:center;gap:9px;padding:8px 1.1rem;color:var(--muted);cursor:pointer;font-size:13px;border:none;background:none;width:100%;text-align:left;font-family:'Sora',sans-serif;transition:.15s;border-left:3px solid transparent}
.si:hover{background:var(--sand);color:var(--ink)}.si.on{background:#eef2ff;color:var(--ink);font-weight:500;border-left-color:var(--ink)}
.si svg{width:16px;height:16px;flex-shrink:0}
.area{padding:1.75rem;max-width:1060px}

/* CARDS */
.card{background:#fff;border-radius:var(--rl);border:1px solid var(--bdr);padding:1.4rem;margin-bottom:1.4rem}
.ch{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.1rem;padding-bottom:.9rem;border-bottom:1px solid var(--bdr)}
.ct{font-family:'Lora',serif;font-size:17px;color:var(--ink)}.cs{font-size:12px;color:var(--light);margin-top:2px}
.sgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:.9rem;margin-bottom:1.4rem}
.sc{background:#fff;border-radius:var(--r);border:1px solid var(--bdr);padding:1.1rem;position:relative;overflow:hidden}
.sc::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px}
.sc-i::after{background:var(--ink)}.sc-a::after{background:var(--amb)}.sc-o::after{background:var(--ok)}.sc-b::after{background:#2563eb}
.sv{font-size:26px;font-weight:600;color:var(--ink)}.sl{font-size:11px;color:var(--light);text-transform:uppercase;letter-spacing:.05em;margin-top:3px}
.tw{overflow-x:auto;border-radius:var(--r);border:1px solid var(--bdr)}
table{width:100%;border-collapse:collapse}thead tr{background:#f8f9fb}
th{padding:10px 13px;text-align:left;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);border-bottom:1px solid var(--bdr)}
td{padding:11px 13px;font-size:13px;color:var(--ink);border-bottom:1px solid var(--bdr);vertical-align:middle}
tr:last-child td{border-bottom:none}tr:hover td{background:#fafbfc}
.mgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.9rem;margin-bottom:1.4rem}
.mc{background:#fff;border:1px solid var(--bdr);border-radius:var(--r);padding:1.1rem}
.mico{font-size:26px;margin-bottom:.6rem}.mname{font-weight:600;font-size:13px;color:var(--ink);margin-bottom:1px}.mhrs{font-size:11px;color:var(--light);margin-bottom:.6rem}
.pbar{height:5px;background:#e5e7eb;border-radius:3px;overflow:hidden}.pfill{height:100%;border-radius:3px;transition:width .4s}.plbl{font-size:11px;color:var(--light);margin-top:3px}
.qcard{background:#fff;border:1px solid var(--bdr);border-radius:var(--r);padding:1.1rem;margin-bottom:.9rem}
.qn{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--light);margin-bottom:5px}
.qt{font-size:14px;color:var(--ink);margin-bottom:.9rem;line-height:1.5}
.opts{display:flex;flex-direction:column;gap:6px}
.opt{display:flex;align-items:center;gap:9px;padding:9px 13px;border:1.5px solid var(--bdr);border-radius:10px;cursor:pointer;transition:.15s;font-size:13px}
.opt:hover{border-color:var(--ink);background:#eef2ff}.opt.sel{border-color:var(--ink);background:#eef2ff;font-weight:500}
.opt.correct{border-color:var(--ok);background:var(--okbg);color:var(--ok)}.opt.wrong{border-color:var(--err);background:var(--errbg);color:var(--err)}
.opt input[type=radio]{accent-color:var(--ink)}
.cert{background:#fff;border:10px solid var(--ink);border-radius:4px;padding:2.5rem;text-align:center;max-width:660px;margin:0 auto;position:relative;box-shadow:var(--sh2)}
.cert::before{content:'';position:absolute;inset:7px;border:1.5px solid var(--amb);pointer-events:none}
.co{font-size:11px;text-transform:uppercase;letter-spacing:.15em;color:var(--light);margin-bottom:.9rem}
.ct2{font-family:'Lora',serif;font-size:27px;color:var(--ink);margin-bottom:.4rem}
.cs2{font-size:13px;color:var(--muted);margin-bottom:1.75rem}
.cpre{font-size:12px;color:var(--light);margin-bottom:.4rem}
.cn{font-family:'Lora',serif;font-size:24px;color:var(--amb);border-bottom:2px solid var(--amb);display:inline-block;padding:0 1.75rem 3px;margin-bottom:1.25rem}
.cdesc{font-size:12px;color:var(--muted);max-width:360px;margin:0 auto 1.75rem;line-height:1.6}
.csigs{display:flex;justify-content:space-around;margin-top:1.75rem}
.csig{border-top:1.5px solid var(--ink);padding-top:5px;font-size:10px;color:var(--light);text-align:center;min-width:110px}
.cdate{font-size:11px;color:var(--light);margin-top:1.25rem}
.movl{position:fixed;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;z-index:200;backdrop-filter:blur(4px)}
.mbox{background:#fff;border-radius:var(--rl);padding:1.75rem;width:520px;max-width:92vw;max-height:88vh;overflow-y:auto;box-shadow:var(--sh2)}
.mhdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem}
.mttl{font-family:'Lora',serif;font-size:18px;color:var(--ink)}
.mcls{width:30px;height:30px;border-radius:7px;border:none;background:var(--sand);cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:17px}
.mcls:hover{background:var(--errbg);color:var(--err)}
#tc{position:fixed;bottom:1.5rem;right:1.5rem;z-index:999;display:flex;flex-direction:column;gap:7px}
.toast{padding:11px 16px;border-radius:11px;font-size:13px;font-weight:500;box-shadow:var(--sh);display:flex;align-items:center;gap:8px;animation:tin .3s ease;max-width:300px}
@keyframes tin{from{transform:translateX(80px);opacity:0}to{transform:none;opacity:1}}
.ts{background:var(--okbg);color:var(--ok);border-left:4px solid var(--ok)}
.te{background:var(--errbg);color:var(--err);border-left:4px solid var(--err)}
.ti{background:var(--ibg);color:var(--ifc);border-left:4px solid #2563eb}
.ph{margin-bottom:1.5rem}.ph h1{font-family:'Lora',serif;font-size:23px;color:var(--ink)}.ph p{font-size:12px;color:var(--light);margin-top:3px}
.ibox{border-radius:10px;padding:10px 14px;font-size:12px;margin-bottom:1rem;line-height:1.6}
.ib{background:var(--ibg);color:var(--ifc);border:1px solid #93c5fd}.io{background:var(--warnbg);color:var(--warn);border:1px solid #fcd34d}
.fr2{display:grid;grid-template-columns:1fr 1fr;gap:.9rem}
.fsec{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--light);margin:1.25rem 0 .6rem}
@media(max-width:768px){.alayout{grid-template-columns:1fr}.sidebar{display:none}.fr2{grid-template-columns:1fr}}
