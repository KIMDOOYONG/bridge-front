import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`

const skill = () => (
  <Ul>
    <li class="prjList__item js-link">
      <div class="prjHead prjHead--label">
        <div class="prjLabel prjLabel--new">
          <p class="prjLabel__txt">New</p>
        </div>
        <h3 class="prjHead__ttl">
          <a href="/project/detail/43057/" class="js-link_rel" target="_blank">
            【PL/SQL】飲料メーカー向けSAP移行
          </a>{' '}
          のエンジニア求人・案件
        </h3>
      </div>
      <div class="prjContent">
        <Ul class="prjContent__summary">
          <li class="prjContent__summary__price">
            ～<span>520,000円</span>／月
          </li>
          <li class="prjContent__summary__contract">
            業務委託（フリーランス）{' '}
          </li>
        </Ul>
        <Ul class="prjTable">
          <li class="prjTable__item">
            <p class="prjTable__item__ttl">職務内容</p>
            <p class="prjTable__item__desc js-highlightArea">
              ・SAP移行に伴う、データベースのストアドプロシージャ対応を行っていただきます。
            </p>
          </li>
          <li class="prjTable__item">
            <p class="prjTable__item__ttl">最寄り駅</p>
            <p class="prjTable__item__desc">中野（東京都)</p>
          </li>
          <li class="prjTable__item">
            <p class="prjTable__item__ttl">開発環境</p>
            <p class="prjTable__item__desc js-link_exclude">
              <a href="/project/skill-27/" class="tagLink">
                PL/SQL
              </a>
              <a href="/project/os-3/" class="tagLink">
                Linux
              </a>
              <a href="/project/db-2/" class="tagLink">
                Oracle
              </a>
            </p>
          </li>
          <li class="prjTable__item">
            <p class="prjTable__item__ttl">募集職種</p>
            <p class="prjTable__item__desc js-link_exclude">
              <a href="/project/occ-4/" class="tagLink">
                インフラエンジニア
              </a>
              <a href="/project/occ-11/" class="tagLink">
                データベースエンジニア
              </a>
            </p>
          </li>
          <li class="prjTable__item">
            <p class="prjTable__item__ttl">求めるスキル</p>
            <p class="prjTable__item__desc js-highlightArea">
              ・PL/SQLの経験 ・ストアドプロシージャの経験
            </p>
          </li>
        </Ul>
        <div class="prjComment">
          <p class="prjComment__img">
            <img
              src="/files/img/coordinator/round/19.png"
              height="72"
              width="72"
              alt="企業担当 米本 奈緒子"
            />
          </p>
          <p class="prjComment__txt js-highlightArea">
            飲料メーカー向けSAP移行に携わっていただきます。
            PL/SQLの経験がある方にマッチします。
          </p>
        </div>
        <Ul class="prjBtn">
          <li class="prjBtn__keep js-prjListKeep js-link_exclude">
            <a
              href="javascript:void(0)"
              class="js-keepProject is-unkept"
              data-project_id="43057"
              onclick="ga('send', 'event', 'HP', 'keep', 'add');"
            >
              とりあえずキープする
            </a>
          </li>
          <li class="prjBtn__detail">
            <a href="/project/detail/43057/" target="_blank">
              詳細を見る
            </a>
          </li>
        </Ul>
      </div>
    </li>
  </Ul>
)

export default skill
