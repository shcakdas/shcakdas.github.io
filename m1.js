



		<!-- menu2 items -->
		var m2home =  '<ul style="margin: 0px"> <!--<li id="qual"><a href="qualifications.html">Qualifications</a></li> --> <li id="edu"><a href="education.html">Education</a></li> <li id="aw"><a href="awardshonors.html">Awards & Honors</a></li> <li id="lead"><a href="uncon.html">Leadership</a></li> </ul>';
		var m2extra = '<ul style="margin: 0px"> <li><a href="uncon.html">Activities</a></li> <li id="lang"><a href="language.html">Languages</a></li> <li id="trav"><a href="map.html">Travels</a></li> <li id="pics"><a href="pictures.html">Pictures</a></li> <li id="vid"><a href="videos.html">Videos</a></li></ul>';
		var m2resrch = '<ul style="margin: 0px"> <li id="rexp"><a href="uncon.html">Experiences</a></li> <li id="pub"><a href="publications.html">Publications</a></li> <li id="talk"><a href="talks.html">Invited Talks</a></li>  <li id="fund"><a href="funds.html">Funds & Grants</a></li> <li id="grp"><a href="uncon.html">Group Members</a></li> <li id="avl"><a href="available.html">Available Positions</a></li> <!--<li id="rvid"><a href="rvideos.html">Videos</a></li>--></ul>';
		var m2teach = '<ul style="margin: 0px"> <li id="teachexp"><a href="teach_exp.html">Experiences</a></li>  <li id="teachmeth"><a href="teach_method.html">Methodology</a></li> <li id="ttestm"><a href="teach_testimonials.html">Testimonials</a></li> <li id="std"><a href="students.html">Supervision</a></li>  <li id="crs"><a href="courses.html">Current Courses</a></li> <li> <a href="uncon.html">Material</a></li> </ul>';
		var m2serv = '<ul style="margin: 0px"> <li><a href="uncon.html">Organization</a></li> <li id="comm"><a href="uncon.html">Committee Member</a></li> <li id="review"><a href="uncon.html">Reviewer</a></li>  <li id="editor"><a href="uncon.html">Editorship</a></li> <li id="otherserv"><a href="uncon.html">Others</a></li></ul>';
		var m2cont = 'The best way to reach me is via my email account.';
		
		var m1hmbk = 'transparent';
		var m1acbk = 'transparent';
		var m1exbk = 'transparent';
		var m1abbk = 'transparent';
		var m1ctbk = 'transparent';
		var m1svbk = 'transparent';

		
		function men2(m1)
			{
			m1hmbk='transparent';
			bkcb('idhm', m1hmbk);
			m1acbk='transparent';
			bkcb('idac', m1acbk);
			m1exbk='transparent';
			bkcb('idex', m1exbk);
			m1abbk='transparent';
			bkcb('idab', m1abbk);
			m1ctbk='transparent';
			bkcb('idct', m1ctbk);
			m1svbk='transparent';
			bkcb('idsv', m1svbk);
			switch(m1)
				{
				case 'home':
					m1hmbk='#94A8D1';
					bkcb('idhm', m1hmbk);
					break;
				case 'next':
					m1acbk='#94A8D1';
					bkcb('idac', m1acbk);
					break;
				case 'upcoming':
					m1exbk='#94A8D1';
					bkcb('idex', m1exbk);
					break;
				case 'about':
					m1abbk='#94A8D1';
					bkcb('idab', m1abbk);
					break;
				case 'contacts':
					m1ctbk='#94A8D1';
					bkcb('idct', m1ctbk);
					break;
				case 'past':
					m1svbk='#94A8D1';
					bkcb('idsv', m1svbk);
					break;
				default:
					men2list= m2home;
				}
			document.getElementById('m2').innerHTML = men2list;
			return;
			}
			
		function bkc(item, clr)
		<!-- changing background color over hover -->
			{
			document.getElementById(item).style.background=clr;
			}
		function bkcb(item,clr)
		<!-- changing the background color back to clr -->
			{
			document.getElementById(item).style.background = clr;
			}
		function change_m2(item)
			{
						document.getElementById(item).style.padding = '5px';
						bkc(item, '#F6F6F6'); 
			}
		function togglebutt(item)
			{
				if (document.getElementById(item).style.display=='block')
					{
						document.getElementById(item).style.display = 'none';
					}
				else
					{
						document.getElementById(item).style.display = 'block';
					}
				
			}
		function group_togglebutt(gtpbutts, item)
			{
				if (document.getElementById(item).style.display=='block')
					{
						document.getElementById(item).style.display = 'none';
					}
				else
					{
						for (i=0; i<gtpbutts.length;i++)
							{
							document.getElementById(gtpbutts[i]).style.display = 'none';
							}
						document.getElementById(item).style.display = 'block';
					}
			}
		function lastmod(item)
			{
				document.getElementById(item).innerHTML = document.lastModified;
			}