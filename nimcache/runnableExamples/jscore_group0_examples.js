/* Generated by the Nim Compiler v1.5.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33555110 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555114 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555900 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555069 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555151 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555150 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555098 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555099 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555106 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555108 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554456 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI520093735 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI520093744 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NNI520093744 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "a", len: 0, typ: NTI520093735, name: "a", sons: null}, 
{kind: 1, offset: "b", len: 0, typ: NTI33554456, name: "b", sons: null}]};
NTI520093744.node = NNI520093744;
var NNI33555108 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555108.node = NNI33555108;
var NNI33555106 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555106.node = NNI33555106;
var NNI33555099 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555099.node = NNI33555099;
NTI33555150.base = NTI33555098;
NTI33555151.base = NTI33555098;
var NNI33555098 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555150, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555151, name: "up", sons: null}]};
NTI33555098.node = NNI33555098;
var NNI33555069 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555069.node = NNI33555069;
NTI33555098.base = NTI33555069;
NTI33555099.base = NTI33555098;
NTI33555106.base = NTI33555099;
NTI33555108.base = NTI33555106;
var NNI33555900 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554440, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554456, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554440, name: "Field2", sons: null}]};
NTI33555900.node = NNI33555900;
var NNI33555114 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555114.node = NNI33555114;
NTI33555114.base = NTI33555099;
var NNI33555110 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555110.node = NNI33555110;
NTI33555110.base = NTI33555099;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557150, src_33557151, ti_33557152) {
  var result_33557161 = null;

    switch (ti_33557152.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557141(ti_33557152))) {
      result_33557161 = src_33557151;
      }
      else {
        result_33557161 = [src_33557151[0], src_33557151[1]];
      }
      
      break;
    case 19:
            if (dest_33557150 === null || dest_33557150 === undefined) {
        dest_33557150 = {};
      }
      else {
        for (var key in dest_33557150) { delete dest_33557150[key]; }
      }
      for (var key in src_33557151) { dest_33557150[key] = src_33557151[key]; }
      result_33557161 = dest_33557150;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557152.base == null))) {
      result_33557161 = nimCopy(dest_33557150, src_33557151, ti_33557152.base);
      }
      else {
      if ((ti_33557152.kind == 17)) {
      result_33557161 = (dest_33557150 === null || dest_33557150 === undefined) ? {m_type: ti_33557152} : dest_33557150;
      }
      else {
        result_33557161 = (dest_33557150 === null || dest_33557150 === undefined) ? {} : dest_33557150;
      }
      }
      nimCopyAux(result_33557161, src_33557151, ti_33557152.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_33557151 === null) {
        result_33557161 = null;
      }
      else {
        if (dest_33557150 === null || dest_33557150 === undefined) {
          dest_33557150 = new Array(src_33557151.length);
        }
        else {
          dest_33557150.length = src_33557151.length;
        }
        result_33557161 = dest_33557150;
        for (var i = 0; i < src_33557151.length; ++i) {
          result_33557161[i] = nimCopy(result_33557161[i], src_33557151[i], ti_33557152.base);
        }
      }
    
      break;
    case 28:
            if (src_33557151 !== null) {
        result_33557161 = src_33557151.slice(0);
      }
    
      break;
    default: 
      result_33557161 = src_33557151;
      break;
    }

  return result_33557161;

}

function makeNimstrLit(c_33556808) {
      var result = [];
  for (var i = 0; i < c_33556808.length; ++i) {
    result[i] = c_33556808.charCodeAt(i);
  }
  return result;
  

  
}

function arrayConstr(len_33557189, value_33557190, typ_33557191) {
        var result = new Array(len_33557189);
    for (var i = 0; i < len_33557189; ++i) result[i] = nimCopy(null, value_33557190, typ_33557191);
    return result;
  

  
}

function cstrToNimstr(c_33556811) {
      var ln = c_33556811.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556811.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556811.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556814) {
                    var Temporary5;
            var Temporary7;

  var result_33556815 = null;

    var res_33556849 = newSeq_33556832((s_33556814).length);
    var i_33556850 = 0;
    var j_33556851 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556850 < (s_33556814).length)) break Label2;
          var c_33556852 = s_33556814[i_33556850];
          if ((c_33556852 < 128)) {
          res_33556849[j_33556851] = String.fromCharCode(c_33556852);
          i_33556850 += 1;
          }
          else {
            var helper_33556864 = newSeq_33556832(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556865 = c_33556852.toString(16);
                  if ((((code_33556865) == null ? 0 : (code_33556865).length) == 1)) {
                  helper_33556864.push("%0");;
                  }
                  else {
                  helper_33556864.push("%");;
                  }
                  
                  helper_33556864.push(code_33556865);;
                  i_33556850 += 1;
                    if (((s_33556814).length <= i_33556850)) Temporary5 = true; else {                      Temporary5 = (s_33556814[i_33556850] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556852 = s_33556814[i_33556850];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556849[j_33556851] = decodeURIComponent(helper_33556864.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556849[j_33556851] = helper_33556864.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556851 += 1;
        }
    } while (false);
    if (res_33556849.length < j_33556851) { for (var i = res_33556849.length ; i < j_33556851 ; ++i) res_33556849.push(null); }
               else { res_33556849.length = j_33556851; };
    result_33556815 = res_33556849.join("");

  return result_33556815;

}

function raiseException(e_33556675, ename_33556676) {
    e_33556675.name = ename_33556676;
    if ((excHandler == 0)) {
    unhandledException(e_33556675);
    }
    
    e_33556675.trace = nimCopy(null, rawWriteStackTrace_33556639(), NTI33554439);
    throw e_33556675;

  
}

function subInt(a_33556951, b_33556952) {
        var result = a_33556951 - b_33556952;
    checkOverflowInt(result);
    return result;
  

  
}

function chckIndx(i_33557194, a_33557195, b_33557196) {
      var Temporary1;

  var result_33557197 = 0;

  BeforeRet: do {
      if (!(a_33557195 <= i_33557194)) Temporary1 = false; else {        Temporary1 = (i_33557194 <= b_33557196);      }    if (Temporary1) {
    result_33557197 = i_33557194;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557194, a_33557195, b_33557196);
    }
    
  } while (false);

  return result_33557197;

}

function addInt(a_33556947, b_33556948) {
        var result = a_33556947 + b_33556948;
    checkOverflowInt(result);
    return result;
  

  
}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557141(ti_33557142) {
  var result_33557143 = false;

  BeforeRet: do {
    result_33557143 = !((ConstSet1[ti_33557142.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557143;

}

function nimCopyAux(dest_33557154, src_33557155, n_33557156) {
    switch (n_33557156.kind) {
    case 0:
      break;
    case 1:
            dest_33557154[n_33557156.offset] = nimCopy(dest_33557154[n_33557156.offset], src_33557155[n_33557156.offset], n_33557156.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557156.sons.length; i++) {
      nimCopyAux(dest_33557154, src_33557155, n_33557156.sons[i]);
    }
    
      break;
    case 3:
            dest_33557154[n_33557156.offset] = nimCopy(dest_33557154[n_33557156.offset], src_33557155[n_33557156.offset], n_33557156.typ);
      for (var i = 0; i < n_33557156.sons.length; ++i) {
        nimCopyAux(dest_33557154, src_33557155, n_33557156.sons[i][1]);
      }
    
      break;
    }

  
}

function HEX2EHEX2E_520093731(a_520093734, b_520093735) {
  var result_520093738 = ({a: 0, b: 0});

  var F = {procname: ".....", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 512;
    result_520093738 = nimCopy(result_520093738, {a: a_520093734, b: b_520093735}, NTI520093744);
  framePtr = F.prev;

  return result_520093738;

}

function add_33556416(x_33556417, x_33556417_Idx, y_33556418) {
          if (x_33556417[x_33556417_Idx] === null) { x_33556417[x_33556417_Idx] = []; }
      var off = x_33556417[x_33556417_Idx].length;
      x_33556417[x_33556417_Idx].length += y_33556418.length;
      for (var i = 0; i < y_33556418.length; ++i) {
        x_33556417[x_33556417_Idx][off+i] = y_33556418.charCodeAt(i);
      }
    

  
}

function auxWriteStackTrace_33556551(f_33556552) {
          var Temporary3;

  var result_33556553 = [[]];

    var it_33556561 = f_33556552;
    var i_33556562 = 0;
    var total_33556563 = 0;
    var tempFrames_33556564 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555900);
    Label1: do {
        Label2: while (true) {
          if (!!((it_33556561 == null))) Temporary3 = false; else {            Temporary3 = (i_33556562 <= 63);          }        if (!Temporary3) break Label2;
          tempFrames_33556564[i_33556562].Field0 = it_33556561.procname;
          tempFrames_33556564[i_33556562].Field1 = it_33556561.line;
          tempFrames_33556564[i_33556562].Field2 = it_33556561.filename;
          i_33556562 += 1;
          total_33556563 += 1;
          it_33556561 = it_33556561.prev;
        }
    } while (false);
    Label4: do {
        Label5: while (true) {
        if (!!((it_33556561 == null))) break Label5;
          total_33556563 += 1;
          it_33556561 = it_33556561.prev;
        }
    } while (false);
    result_33556553[0] = nimCopy(null, [], NTI33554439);
    if (!((total_33556563 == i_33556562))) {
    result_33556553[0].push.apply(result_33556553[0], makeNimstrLit("("));;
    result_33556553[0].push.apply(result_33556553[0], cstrToNimstr(((total_33556563 - i_33556562)) + ""));;
    result_33556553[0].push.apply(result_33556553[0], makeNimstrLit(" calls omitted) ...\x0A"));;
    }
    
    Label6: do {
      var j_33556610 = 0;
      var colontmp__520093959 = 0;
      colontmp__520093959 = (i_33556562 - 1);
      var res_520093961 = colontmp__520093959;
      Label7: do {
          Label8: while (true) {
          if (!(0 <= res_520093961)) break Label8;
            j_33556610 = res_520093961;
            result_33556553[0].push.apply(result_33556553[0], cstrToNimstr(tempFrames_33556564[j_33556610].Field2));;
            if ((0 < tempFrames_33556564[j_33556610].Field1)) {
            result_33556553[0].push.apply(result_33556553[0], makeNimstrLit("("));;
            result_33556553[0].push.apply(result_33556553[0], cstrToNimstr((tempFrames_33556564[j_33556610].Field1) + ""));;
            if (false) {
            result_33556553[0].push.apply(result_33556553[0], makeNimstrLit(", "));;
            result_33556553[0].push.apply(result_33556553[0], makeNimstrLit("0"));;
            }
            
            result_33556553[0].push.apply(result_33556553[0], makeNimstrLit(")"));;
            }
            
            result_33556553[0].push.apply(result_33556553[0], makeNimstrLit(" at "));;
            add_33556416(result_33556553, 0, tempFrames_33556564[j_33556610].Field0);
            result_33556553[0].push.apply(result_33556553[0], makeNimstrLit("\x0A"));;
            res_520093961 -= 1;
          }
      } while (false);
    } while (false);

  return result_33556553[0];

}

function rawWriteStackTrace_33556639() {
  var result_33556640 = [];

    if (!((framePtr == null))) {
    result_33556640 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(auxWriteStackTrace_33556551(framePtr) || []), NTI33554439);
    }
    else {
      result_33556640 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI33554439);
    }
    

  return result_33556640;

}

function newSeq_33556832(len_33556834) {
  var result_33556835 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 681;
    result_33556835 = new Array(len_33556834); for (var i = 0 ; i < len_33556834 ; ++i) { result_33556835[i] = null; }  framePtr = F.prev;

  return result_33556835;

}

function unhandledException(e_33556671) {
    var buf_33556672 = [[]];
    if (!(((e_33556671.message).length == 0))) {
    buf_33556672[0].push.apply(buf_33556672[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556672[0].push.apply(buf_33556672[0], e_33556671.message);;
    }
    else {
    buf_33556672[0].push.apply(buf_33556672[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556672[0].push.apply(buf_33556672[0], makeNimstrLit(" ["));;
    add_33556416(buf_33556672, 0, e_33556671.name);
    buf_33556672[0].push.apply(buf_33556672[0], makeNimstrLit("]\x0A"));;
    buf_33556672[0].push.apply(buf_33556672[0], rawWriteStackTrace_33556639());;
    var cbuf_33556673 = toJSStr(buf_33556672[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556673);
  }
  else {
    throw cbuf_33556673;
  }
  

  
}

function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI33555108, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556945) {
        if (a_33556945 > 2147483647 || a_33556945 < -2147483648) raiseOverflow();
  

  
}

function raiseIndexError(i_33556762, a_33556763, b_33556764) {
    var Temporary1;

    if ((b_33556764 < a_33556763)) {
    Temporary1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Temporary1 = (makeNimstrLit("index ") || []).concat(cstrToNimstr((i_33556762) + "") || [],makeNimstrLit(" not in ") || [],cstrToNimstr((a_33556763) + "") || [],makeNimstrLit(" .. ") || [],cstrToNimstr((b_33556764) + "") || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554439), parent: null, m_type: NTI33555114, name: null, trace: [], up: null}, "IndexDefect");

  
}

function HEX3DHEX3D_520093709(x_520093711, y_520093712) {
  var result_520093713 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: do {
    F.line = 301;
    var sameObject_520093721 = false;
    F.line = 302;
    sameObject_520093721 = x_520093711 === y_520093712
    if (sameObject_520093721) {
    F.line = 303;
    result_520093713 = true;
    break BeforeRet;
    }
    
    if (!(((x_520093711).length == (y_520093712).length))) {
    F.line = 306;
    result_520093713 = false;
    break BeforeRet;
    }
    
    Label1: do {
      F.line = 308;
      var i_520093767 = 0;
      F.line = 126;
      var colontmp__520093947 = ({a: 0, b: 0});
      F.line = 308;
      colontmp__520093947 = nimCopy(colontmp__520093947, HEX2EHEX2E_520093731(0, subInt((x_520093711).length, 1)), NTI520093744);
      Label2: do {
        F.line = 129;
        var x_520093953 = 0;
        F.line = 90;
        var res_520093954 = colontmp__520093947.a;
        Label3: do {
          F.line = 91;
            Label4: while (true) {
            if (!(res_520093954 <= colontmp__520093947.b)) break Label4;
              F.line = 129;
              x_520093953 = res_520093954;
              F.line = 308;
              i_520093767 = x_520093953;
              if (!((x_520093711[chckIndx(i_520093767, 0, (x_520093711).length - 1)] == y_520093712[chckIndx(i_520093767, 0, (y_520093712).length - 1)]))) {
              F.line = 310;
              result_520093713 = false;
              break BeforeRet;
              }
              
              F.line = 93;
              res_520093954 = addInt(res_520093954, 1);
            }
        } while (false);
      } while (false);
    } while (false);
    F.line = 312;
    result_520093713 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_520093713;

}

function sysFatal_218103844(message_218103847) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    raiseException({message: nimCopy(null, message_218103847, NTI33554439), m_type: NTI33555110, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_218103842(msg_218103843) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 29;
    sysFatal_218103844(msg_218103843);
  framePtr = F.prev;

  
}

function failedAssertImpl_218103866(msg_218103867) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 39;
    raiseAssert_218103842(msg_218103867);
  framePtr = F.prev;

  
}

function HEX3DHEX3D_520093799(x_520093801, y_520093802) {
  var result_520093803 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: do {
    F.line = 301;
    var sameObject_520093811 = false;
    F.line = 302;
    sameObject_520093811 = x_520093801 === y_520093802
    if (sameObject_520093811) {
    F.line = 303;
    result_520093803 = true;
    break BeforeRet;
    }
    
    if (!(((x_520093801).length == (y_520093802).length))) {
    F.line = 306;
    result_520093803 = false;
    break BeforeRet;
    }
    
    Label1: do {
      F.line = 308;
      var i_520093829 = 0;
      F.line = 126;
      var colontmp__520093966 = ({a: 0, b: 0});
      F.line = 308;
      colontmp__520093966 = nimCopy(colontmp__520093966, HEX2EHEX2E_520093731(0, subInt((x_520093801).length, 1)), NTI520093744);
      Label2: do {
        F.line = 129;
        var x_520093968 = 0;
        F.line = 90;
        var res_520093969 = colontmp__520093966.a;
        Label3: do {
          F.line = 91;
            Label4: while (true) {
            if (!(res_520093969 <= colontmp__520093966.b)) break Label4;
              F.line = 129;
              x_520093968 = res_520093969;
              F.line = 308;
              i_520093829 = x_520093968;
              if (!((x_520093801[chckIndx(i_520093829, 0, (x_520093801).length - 1)] == y_520093802[chckIndx(i_520093829, 0, (y_520093802).length - 1)]))) {
              F.line = 310;
              result_520093803 = false;
              break BeforeRet;
              }
              
              F.line = 93;
              res_520093969 = addInt(res_520093969, 1);
            }
        } while (false);
      } while (false);
    } while (false);
    F.line = 312;
    result_520093803 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_520093803;

}
var F = {procname: "module jscore_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim", line: 0};
framePtr = F;
if (!(HEX3DHEX3D_520093709([97, 98, 99, 100, 101].copyWithin(0, 3, 4), [100, 98, 99, 100, 101]))) {
F.line = 119;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(8, 10) `[\'a\', \'b\', \'c\', \'d\', \'e\'].copyWithin(0, 3, 4) == @[\'d\', \'b\', \'c\', \'d\', \'e\']` "));
}

if (!(HEX3DHEX3D_520093709([97, 98, 99, 100, 101].copyWithin(1, 3), [97, 100, 101, 100, 101]))) {
F.line = 119;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(9, 10) `[\'a\', \'b\', \'c\', \'d\', \'e\'].copyWithin(1, 3) == @[\'a\', \'d\', \'e\', \'d\', \'e\']` "));
}

if (!(HEX3DHEX3D_520093799(new Int32Array([1, 2, 3, 4, 5]).copyWithin(-2), [1, 2, 3, 1, 2]))) {
F.line = 119;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(10, 10) `[1, 2, 3, 4, 5].copyWithin(-2) == @[1, 2, 3, 1, 2]` "));
}

if (!(HEX3DHEX3D_520093799(new Int32Array([1, 2, 3, 4, 5]).copyWithin(0, 3), [4, 5, 3, 4, 5]))) {
F.line = 119;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(11, 10) `[1, 2, 3, 4, 5].copyWithin(0, 3) == @[4, 5, 3, 4, 5]` "));
}

if (!(HEX3DHEX3D_520093799(new Int32Array([1, 2, 3, 4, 5]).copyWithin(0, 3, 4), [4, 2, 3, 4, 5]))) {
F.line = 119;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(12, 10) `[1, 2, 3, 4, 5].copyWithin(0, 3, 4) == @[4, 2, 3, 4, 5]` "));
}

if (!(HEX3DHEX3D_520093799(new Int32Array([1, 2, 3, 4, 5]).copyWithin(-2, -3, -1), [1, 2, 3, 3, 4]))) {
F.line = 119;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(13, 10) `[1, 2, 3, 4, 5].copyWithin(-2, -3, -1) == @[1, 2, 3, 3, 4]` "));
}

framePtr = F.prev;
var F = {procname: "module jscore_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;