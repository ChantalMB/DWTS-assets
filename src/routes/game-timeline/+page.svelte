<script>
  import { Col, Container, Row } from 'sveltestrap';

</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</svelte:head>

<header class="example-header">
    <h1 class="text-center">A very brief chronology of World War II</h1>
    <p>by Aleksandra Bennett, Martha Attridge Bufton, and Ian Bufton</p>
</header>

<Container fluid>
    <Row class="example-centered">
        <Col xs={{ size: 10, offset: 1}} sm={{ size: 8, offset: 2}}>
            <ul class="timeline timeline-centered">
                <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">1939</h2>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>September 1</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">War Begins</h3>
                        <p>Germany invades Poland.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>September 3</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">First Allies</h3>
                        <p>England and France declare war on Germany.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>September 10</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Canada Joins</h3>
                        <p>Canada declares war on Germany.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>Within this year</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Closed Communications</h3>
                        <p>Ham radio operators go off the air in Britain, Canada and other countries.</p>
                    </div>
                </li>

                <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">1940</h2>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>May-June</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Battle of Dunkirk</h3>
                        <p>The Battle of Dunkirk takes place between May and June 1940. During this military campaign, the British government and civilians evacuated British and other Allied forces to Britain from France.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>May-June</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Battle of France</h3>
                        <p>The Battle of France occurs between May 10 and June 22. By this time Germany has overrun Denmark, Norway, Belgium, and the Netherlands. Italy declares war and invades France June 10.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>July-October</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Battle of Britain</h3>
                        <p>The Battle of Britain begins in July and ends in October. This was a major air battle between the British Royal Air Force and the German air force or Luftwaffe.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>Autumn</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">The Blitz</h3>
                        <p>The Blitz begins in the fall and lasts approximately eight months. The German air force bombs major industrial centres and ports, including Manchester and Liverpool.</p>
                    </div>
                </li>

                <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">1941</h2>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>June</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Invasion of Russia</h3>
                        <p>Germany invades Russia in June; a major shift in military strategy as Germany is now conducting war on two fronts.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>December</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Attack on Pearl Harbour</h3>
                        <p>The United States declares war on Japan on December 8 after the Japanese bombing of Pearl Harbour (Hawaii); Britain declares war on Japan on the same day. Germany and Italy declare war on the United States on  December 11.</p>
                    </div>
                </li>

                <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">1942</h2>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>Within this year</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">World War</h3>
                        <p>The war is now being fought in the Pacific, Europe, and Africa.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>Within this year</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Allies Progress</h3>
                        <p>The Allies make significant gains in North Africa and Russian forces make gains in Stalingrad.</p>
                    </div>
                </li>

                <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">1943</h2>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>July-October</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Italian Warfare</h3>
                        <p>The Allied invasion of Sicily begins in July; Italy ends the war with Anglo-American forces on September 8. The Allies begin the mainland invasion of Italy on September 9. Italy declares war against Germany on October 11.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>November</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Revision of Strategy</h3>
                        <p>Josef Stalin (Soviet Union), Franklin D. Roosevelt (U.S.) and Winston Churchill (Britain) meet in November (Teheran Conference) to set a joint military strategy.</p>
                    </div>
                </li>

                <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">1944</h2>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>June</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">D-Day</h3>
                        <p>The Allied forces land in Normandy (France) on June 6, 1944.</p>
                    </div>
                </li>

                <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">1945</h2>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>May 8</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Germany Surrenders</h3>
                        <p>Germany surrenders on May 8.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>August</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Bombing of Japan</h3>
                        <p>The United States drops atomic bombs on two Japanese cities: on Hiroshima August 6, and on Nagasaki August 9.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>August</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Japan Surrenders</h3>
                        <p>Japan surrenders on August 15; formal documents signed 2 September.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>Within this year</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Communication Resumes</h3>
                        <p>Ham radio operators go back on the air by the end of the year.</p>
                    </div>
                </li>
            </ul>
        </Col>
    </Row>
</Container>

<style>
:global(.container-fluid) {
    margin-top: 1em;
}

:global(.main) {
    background: #191a2c;
}

h1, h2, h3 {
  color: #ebe2d4;
  margin-top: 0;
  font-family: 'Courier Prime', monospace;
}

p {
    font-family: 'Georgia', serif;
    color: #ebe2d4;
}

a {
  color: #FF6B6B;
}
a:hover {
  color: #ff9a9a;
  text-decoration: none;
}

.example-header {
  background: #ebe2d4;
  color: #191a2c;
  font-weight: 300;
  padding: 1em 1em;
  text-align: center;
}
.example-header h1 {
  color: #191a2c;
  font-weight: 300;
  margin-bottom: 20px;
}
.example-header p {
  color: #191a2c;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
}

/*==================================
    TIMELINE
==================================*/
/*-- GENERAL STYLES
------------------------------*/
.timeline {
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.timeline h2, .timeline h3 {
  line-height: inherit;
}

/*----- TIMELINE ITEM -----*/
.timeline-item {
  padding-left: 40px;
  position: relative;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

/*----- TIMELINE INFO -----*/
.timeline-info {
  font-size: 11px;
  font-family: 'Georgia', serif;
  color: #ebe2d4;
  font-weight: 700;
  margin: 0 0 0.5em 0;
  text-transform: uppercase;
  white-space: nowrap;
}

/*----- TIMELINE MARKER -----*/
.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
}

.timeline-marker:before {
  background: #FF6B6B;
  border: 3px solid transparent;
  border-radius: 100%;
  content: "";
  display: block;
  height: 15px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
}

.timeline-marker:after {
  content: "";
  width: 3px;
  background: #dfccaf;
  display: block;
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 6px;
}

.timeline-item:last-child .timeline-marker:after {
  content: none;
}

.timeline-item:not(.period):hover .timeline-marker:before {
  background: transparent;
  border: 3px solid #FF6B6B;
}

/*----- TIMELINE CONTENT -----*/
.timeline-content {
  padding-bottom: 40px;
}

.timeline-content p:last-child {
  margin-bottom: 0;
}

/*----- TIMELINE PERIOD -----*/
.period {
  padding: 0;
}

.period .timeline-info {
  display: none;
}

.period .timeline-marker:before {
  background: transparent;
  content: "";
  width: 15px;
  height: auto;
  border: none;
  border-radius: 0;
  top: 0;
  bottom: 30px;
  position: absolute;
  border-top: 3px solid #dfccaf;
  border-bottom: 3px solid #dfccaf;
}

.period .timeline-marker:after {
  content: "";
  height: 32px;
  top: auto;
}

.period .timeline-content {
  padding: 40px 0 70px;
}

.period .timeline-title {
  margin: 0;
}

/*----------------------------------------------
    MOD: TIMELINE SPLIT
----------------------------------------------*/
@media (min-width: 768px) {

.timeline-centered .timeline-item {
    display: table-row;
    padding: 0;
}

.timeline-centered .timeline-info,
.timeline-centered .timeline-marker,
.timeline-centered .timeline-content,
.timeline-split .period .timeline-info {
    display: table-cell;
    vertical-align: top;
}

.timeline-centered .timeline-marker {
    position: relative;
}

.timeline-centered .timeline-content {
    padding-left: 30px;
}

.timeline-centered .timeline-info {
    padding-right: 30px;
}

.timeline-split .period .timeline-title, .timeline-centered .period .timeline-title {
    position: relative;
    left: -45px;
}
}

/*----------------------------------------------
    MOD: TIMELINE CENTERED
----------------------------------------------*/
@media (min-width: 992px) {
  .timeline-centered,
.timeline-centered .timeline-item,
.timeline-centered .timeline-info,
.timeline-centered .timeline-marker,
.timeline-centered .timeline-content {
    display: block;
    margin: 0;
    padding: 0;
  }

  .timeline-centered .timeline-item {
    padding-bottom: 40px;
    overflow: hidden;
  }

  .timeline-centered .timeline-marker {
    position: absolute;
    left: 50%;
    margin-left: -7.5px;
  }

  .timeline-centered .timeline-info,
.timeline-centered .timeline-content {
    width: 50%;
  }

  .timeline-centered > .timeline-item:nth-child(odd) .timeline-info {
    float: left;
    text-align: right;
    padding-right: 30px;
  }

  .timeline-centered > .timeline-item:nth-child(odd) .timeline-content {
    float: right;
    text-align: left;
    padding-left: 30px;
  }

  .timeline-centered > .timeline-item:nth-child(even) .timeline-info {
    float: right;
    text-align: left;
    padding-left: 30px;
  }

  .timeline-centered > .timeline-item:nth-child(even) .timeline-content {
    float: left;
    text-align: right;
    padding-right: 30px;
  }

  .timeline-centered > .timeline-item.period .timeline-content {
    float: none;
    padding: 0;
    width: 100%;
    text-align: center;
  }

  .timeline-centered .timeline-item.period {
    padding: 50px 0 90px;
  }

  .timeline-centered .period .timeline-marker:after {
    height: 30px;
    bottom: 0;
    top: auto;
  }

  .timeline-centered .period .timeline-title {
    left: auto;
  }

}

/*----------------------------------------------
    MOD: MARKER OUTLINE
----------------------------------------------*/

.marker-outline .timeline-item:hover .timeline-marker:before {
  background: #FF6B6B;
}

</style>
  