let v = ['l3', 'l25', 'l46', 'l64', 'n63'];
let h = [
    ['l3', 'l25', 'l46'],
    ['l3', 'l46', 'l64'],
    ['l3', 'l46', 'n63'],
    ['l25', 'l46', 'n63'],
    ['l46', 'l64', 'n63'],
    ['l3', 'l64'],
    ['l46', 'l64'],
    ['l64', 'n63'],
    ['l25'],
    ['n63']
]

// let v = ['l6', 'l15', 'l1', 'l22', 'n35', 'l27', 'l11', 'l33','n1','n33','l42'];
// let h = [
//     ['l6', 'l15'],
//     ['l1', 'l22'],
//     ['n35', 'l27'],
//     ['l11', 'l33'],
//     ['n1', 'n33', 'l42']
// ];

// FLEL(3, v, h);
// let res = filter([0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0], h, v, currenth);
// console.log(res);
// let currenth = [];
// let res = filter([0, 0, 1, 0, 0], h, v, currenth);
// console.log(res);
// res = filter([0, 0, 1, 1, 0], h, v, res);
// console.log(filter([0, 1, 0, 0, 0], h, v, res));

// 两个函数进行异或之后的运算结果，即H = h(x)+h(x+fault)
function filter(fault, h, v, currenth) {
    for (let i = 0; i < fault.length; i++) {
        // 当fault为1时，表示对应v的当前位置所代表的变量需要异或1，那么当前h(x+fault)与h(x)相比多了一个异或项
        // 例如，当i=1时，fault[i]===1,那么对应v[i]为l25，那么h(x)+h(l25+1)=l3*l46+l46*n63+l25
        // currenth = ['l3l46','l46n63','l25']
        let temp = [];
        if (fault[i] === 1) {
            // console.log(v[i]);
            for (let j = 0; j < h.length; j++) {
                // 判断当前项中是否含有需要改变的变量
                if (h[j].includes(v[i])) {
                    // 如果当前项长度=1，即当前项中只有需要改变的变量，假设变量为x，即计算x*(x+1)=x+x,所有currenth中只需push变量x
                    if (h[j].length > 1) {
                        // 筛选当前项中除了v[i]元素之外的其他元素，将他push到currenth结果中
                        let f = h[j].filter(k => k !== v[i]);
                        // 去重，把重复元素全部删除，因为相同数组异或为0
                        if (currenth.indexOf(f.join(',')) !== -1) {
                            currenth.splice(currenth.indexOf(f.join(',')), 1);
                        } else {
                            currenth.push(f.join(','));
                        }
                        temp.push(f);
                    } else {
                        if (currenth.indexOf(h[j].join()) !== -1) {
                            currenth.splice(currenth.indexOf(h[j].join(',')), 1);
                        } else {
                            currenth.push(h[j].join(','));
                        }
                        temp.push(h[j]);
                    }

                }
            }
        }
        h = MergeArray(h, temp);
    }
    return currenth;
}

// 数组合并去重
function MergeArray(arr1, arr2) {
    var _arr = new Array();
    for (var i = 0; i < arr1.length; i++) {
        _arr.push(arr1[i]);
    }
    for (var i = 0; i < arr2.length; i++) {
        var flag = true;
        for (var j = 0; j < arr1.length; j++) {
            if (arr2[i].join('') == arr1[j].join('')) {
                _arr.splice(j, 1);
                flag = false;
                break;
            }
        }
        if (flag) {
            _arr.push(arr2[i]);
        }
    }
    return _arr;
}

function output(fault,h,v) {
    for (let i = 0; i < fault.length; i++) {
        let temp = [];
        if (fault[i] === 1) {
            for (let j = 0; j < h.length; j++) {
                // 判断当前项中是否含有需要改变的变量
                if (h[j].includes(v[i])) {
                    // 如果当前项长度=1，即当前项中只有需要改变的变量，假设变量为x，即计算x*(x+1)=x+x,所有currenth中只需push变量x
                    if (h[j].length > 1) {
                        let f = h[j].filter(k => k !== v[i]);
                        temp.push(f);
                    } else {
                        temp.push(h[j]);
                    }

                }
            }
        }
        h = MergeArray(h, temp);
    }
    return h;
}

console.log(output([0,0,1,0,0],h,v));
console.log(11111111);