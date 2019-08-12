
	//This js code creates the navbar
	document.getElementById("navbar").innerHTML= `<ul>
				<div class="dropdown">
					<li ><a class="active" href="index.html">SSEA 2019</a></li>
					<div class="dropdown-content col-7">
						<a href="index.html#textcontent1" onclick="delayedOffset()"><i class="fa fa-home"></i> About</a>
						<a href="index.html#textcontent2" onclick="delayedOffset()"><i class="fas fa-users"></i> Organizers</a>
						<a href="index.html#textcontent3" onclick="delayedOffset()"><i class="fas fa-map-marked-alt"></i> Venue</a>
						<a href="index.html#textcontent4" onclick="delayedOffset()"><i class="fas fa-calendar-alt"></i> Key Dates</a>
					</div>
				</div>
				<li ><a href="program.html">Program</a></li>
				<li><a href="register.html">Registration</a></li>
				<li><a href="excursions.html">Excursions</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>`