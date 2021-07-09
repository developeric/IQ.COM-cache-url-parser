var tvid = playerObject._player.package.engine.adproxy.engine.movieinfo.tvid;
var movieInfo = playerObject._player.package.engine.adproxy.engine.episode.EpisodeStore[tvid].movieInfo;

var params, resolution
movieInfo.vidl.forEach(function (item)
{
    if (item.m3u8)
    {
        var rp = item.requestParam;
        params=new URLSearchParams({tvid:rp.tvid,bid:rp.bid,vid:rp.vid,src:rp.src,vt:0,rs:1,uid:rp.uid,ori:"pcw",ps:0,k_uid:rp.k_uid,pt:0,d:0,s:"",lid:"",slid:rp.slid,cf:"",ct:"",authKey:rp.authKey,k_tag:1,ost:0,ppt:0,dfp:rp.dfp,prio:JSON.stringify({ff:"f4v",code:2}),k_err_retries:0,up:"",su:rp.su,applang:"en_us",sver:2,qd_v:2,tm:rp.tm,qdy:rp.qdy,qds:0,k_ft1:rp.k_ft1,k_ft4:rp.k_ft4,k_ft5:rp.k_ft5,bop:JSON.stringify({version:"10.0",dfp:rp.dfp}),ut:rp.ut[0],vf:movieInfo.originalData.data.ctl.vf});
        
        resolution = `${item.realArea.width}x${item.realArea.height}`
    }
})
var url = "https://cache-video.iq.com/dash?" + params.toString();
var info = `\n${movieInfo.tvidInfo[tvid].title} | CACHE DATA\nResolution: ${resolution}\n\nNote: Everything you neeed is in this json data\nYou can parse this manually\n\nscript by zackmark29\n\n`;
prompt(info, url);
