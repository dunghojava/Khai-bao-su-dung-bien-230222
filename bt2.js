function tinh() {
    // var a = +document.getElementById('vn').value;
    // let b = +document.getElementById('usd').value;
    // let c = +document.getElementById('eur').value;
    // let x = +document.getElementById('vn2').value;
    // let y = +document.getElementById('usd2').value;
    // let z = +document.getElementById('eur2').value;
    let i = document.getElementById('tien').value;
    let sl1 = document.getElementById('select1').value;
    let sl2 = document.getElementById('select2').value;
    if (sl1 == sl2) {
        document.write(i);
    }
    else {
        if (sl1 == 'vn' && sl2 == 'eur') {
            document.write(i/25771);
        }
        else {
            if (sl1 == 'vn' && sl2 == 'usd') {
                document.write(i/22810);
            }
            else {
                if (sl1 == 'usd' && sl2 == 'vnd') {
                    document.write(i*22810);
                }
                else {
                    if (sl1 == 'usd' && sl2 == 'eur') {
                        document.write(i*0.8833);
                    }
                    else {
                        if (sl1 == 'eur' && sl2 == 'vn') {
                            document.write(i*25771);
                        }
                        else {
                            if (sl1 == 'eur' && sl2 == 'usd') {
                                document.write(i*1.1321);
                            }
                        }
                    }
                }
            }
        }
    }

}
