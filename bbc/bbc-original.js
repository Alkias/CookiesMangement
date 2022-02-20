Qj = function(a, b) {
	var c = b.attributes["data-name"].value;
	b = b.attributes["data-legal-description"].value.split("*")
		.map(function(d) {
			return d.trim();
		});
	b = xb(Ji, { Z: b[0], wa: b.slice(1, b.length) });
	Sj(a, c, b);
};
Sj = function(a, b, c) {

	a.o = a.v.activeElement;

	jb(a.B, rg(b));

	a.A.appendChild(c);
	b = Oi({
		title: b,
		body: c.textContent,
	});

	a.s.setAttribute("aria-label", b);

	ei(a.i.querySelector(".fc-consent-root .fc-help-dialog-container"));

	hi(".fc-consent-root .fc-dialog-overlay", a.i);

	a.h && Yh(a.h, a.s);

	b = a.i.querySelector(".fc-consent-root .fc-help-dialog h1");

	b.focus();

	a.v.activeElement !== b && a.i.querySelector(".fc-consent-root .fc-help-dialog .fc-help-dialog-close-button")
		.focus();

	a.h && Xh(a.h, function() {
		return Uj(a);
	});
};
xb = function(a, b, c, d) {
	a = a(b || qb, c);
	d = d || rb();
	d = sb(d.g, "DIV");

	if (Aa(a))
		if (a instanceof w) {
			if (a.H !== tb) 
                throw Error("S");
			a = ub(a.toString(), a.N || null);
		} 
        else 
            a = vb("zSoyz");
	else a = vb(String(a));
	wb(d, a);
	1 == d.childNodes.length && ((a = d.firstChild), 1 == a.nodeType && (d =
		a));
	return d;
};
