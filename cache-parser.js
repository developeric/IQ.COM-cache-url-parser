var tvid = playerObject._player.package.engine.adproxy.engine.movieinfo.tvid;
var movieInfo = playerObject._player.package.engine.adproxy.engine.episode.EpisodeStore[tvid].movieInfo;
var vf = movieInfo.originalData.data.ctl.vf;
var vidl = movieInfo.vidl;
vidl.forEach(function (item) {
  if (item.m3u8) {
    var res = item.realArea.width + "x" + item.realArea.height;

    var pr = item.requestParam;
    var authKey = pr.authKey;
    var bid = pr.bid;
    var k_uid = pr.k_uid;
    var dfp = pr.dfp; // "a1726746e4078b4c10a809ddeddbb982073d3792971e0ca03b134484695d13a3d3"
    var src = pr.src; //"01010031010012000000"
    var tm = pr.tm; //1603039230225
    var tvid = pr.tvid;// 6014338714083000
    var uid = pr.uid; //"30100770558"
    var vid = pr.vid;  //"abe2c4788688b54418ebe6a4119bf1a5"
    var slid = pr.slid;
    var qdy = pr.qdy;
    var k_ft1 = pr.k_ft1;
    var k_ft4 = pr.k_ft4;
    var k_ft5 = pr.k_ft5;
    var ut = pr.ut[0];

    var prio = { "ff": "f4v", "code": 2 }
    prio = JSON.stringify(prio);

    var bop = { "version": "10.0", "dfp": dfp }
    bop = JSON.stringify(bop);

    const params = new URLSearchParams({
      tvid: tvid,//17193931900,
      bid: bid,//600
      vid: vid, //abe2c4788688b54418ebe6a4119bf1a5
      src: src, //01010031010015000000
      vt: 0,
      rs: 1,
      uid: uid,
      ori: "pcw",
      ps: 0,
      k_uid: k_uid,
      pt: 0,
      d: 0,
      s: "",
      lid: "",
      slid: slid,
      cf: "",
      ct: "",
      authKey: authKey, //9b21269e96c3549ec4f8d2492ac88620
      k_tag: 1,
      ost: 0,
      ppt: 0,
      dfp: dfp,//a1726746e4078b4c10a809ddeddbb982073d3792971e0ca03b134484695d13a3d3
      prio: prio,
      k_err_retries: 0,
      up: "",
      su: 1,
      applang: "en_us",
      sver: 2,
      qd_v: 2,
      tm: tm,//1603086070170  
      qdy: qdy,
      qds: 0,
      k_ft1: k_ft1,
      k_ft4: k_ft4,
      k_ft5: k_ft5,
      bop: bop,
      ut: ut,
      vf: vf
    });

    var url = "https://cache-video.iq.com/dash?" + params.toString();
    var info = "\n" + GetTitle() + " | CACHE DATA" + "\n" + "Resolution: " + res + "\n\nscript by zackmark29 :)\n\nNOTE: Copy and paste this to my IQIY Parser Tool";
    prompt(info, url);

  }
})
function GetTitle() {
  return document.title.indexOf("-") != -1 ? document.title.substring(0, document.title.indexOf("-")) : document.title.replace(/\s/, "");
}