"use client";

import React from "react";
import { NormalText } from "../ui/TextPrivacyComponents/main";
import * as TextComponents from "@/components/ui/TextComponents/main";
import * as SubtitleComponents from "@/components/ui/SubtitleComponents/main";
import * as styles from "./ContentPrivacy.css";

export const Components: React.FC = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.pcOnly}>
        <div>
          <SubtitleComponents.PinkFillSubTitle fontSize="144px">
            PRIVACY POLICY
          </SubtitleComponents.PinkFillSubTitle>
          <TextComponents.PinkNormalText marginTop="-12px">
            プライバシーポリシー
          </TextComponents.PinkNormalText>
        </div>
        <div className={styles.privacyTextWrapper}>
          <div className={styles.privacyTextSectionWrapper}>
            <NormalText>
              Vista（以下、当社）は、個人情報の取扱いについて個人情報保護方針を定めます。
              <br />
              また、役員及び従業員が個人情報を適切に取り扱うことの重要性を認識した上でこれを遵守し、お客様の個人情報の保護を行ってまいります。なお、ここでいう個人情報とは、個人情報の保護に関する法律に基づいた、お客様の氏名、年齢、電話番号、電子メールアドレス、住所など、お客様個人を特定することのできる情報として規定します。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapper}>
            <TextComponents.PinkNormalText fontSize="20px" marginBottom="11px">
              1. 個人情報の取り扱い
            </TextComponents.PinkNormalText>
            <NormalText>
              個人情報保護に関する法令及びその他の規範を遵守します。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapper}>
            <TextComponents.PinkNormalText fontSize="20px" marginBottom="11px">
              2. 個人情報の収集・利用 
            </TextComponents.PinkNormalText>
            <NormalText marginBottom="30px">
              お客様にお断りなく、個人情報を収集することはせずに適法かつ公正な手段によって行います。
              <br />
              当社は、お客様から個人情報をお預かりする場合は、利用目的や利用方法を通知またはウェブサイト等に公表したうえで、必要な範囲の個人情報をお預かりいたします。
              <br />
              なお、当社が収集する個人情報には、以下の情報が含まれる場合があります。
            </NormalText>
            <NormalText>
              ・ 氏名、年齢、電話番号、電子メールアドレス、住所
              <br />
              ・位置情報（ユーザーの位置データ、GPS情報、IPアドレス）
              <br />
              ・コミュニケーション履歴（カスタマーサポートとのやり取り、チャットログ、メール）
              <br />
              ・プロフィール情報（趣味、興味、その他の自己紹介に関する情報）
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapper}>
            <TextComponents.PinkNormalText fontSize="20px" marginBottom="11px">
              3. 個人情報の利用目的
            </TextComponents.PinkNormalText>
            <NormalText>
              あらかじめお客様に明示させて頂いた目的の範囲内で利用し、範囲を超えて利用する必要が生じた場合には、事前にお客様にその目的を連絡し、同意なしに利用は致しません。
              <br />
              なお、当社では、お預かりした個人情報を年齢分布、趣味嗜好分布、ご利用履歴等で統計的に処理したうえで第三者へ提供し、または一般公開する場合がございますが、これらの情報は、個人を特定できるものではございません。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapper}>
            <TextComponents.PinkNormalText fontSize="20px" marginBottom="11px">
              4. 個人情報の開示
            </TextComponents.PinkNormalText>
            <NormalText>
              お客様からご提供頂きました個人情報は、法令の定める場合等、正当な理由がある場合を除き、お客様の同意を得ることなく、第三者に提供、開示することは致しません。
              <br />
              なお、当社は、あらかじめ利用規約等によりお客様の同意を得て、各事業に必要な範囲内で、当社の提携会社および業務委託先に個人情報を開示する場合がございますが、この場合、当該提携会社および業務委託先が個人情報を漏洩し、再提供する等、あらかじめ定められた利用目的を超えて利用しないように秘密保持契約を締結する等の適切な措置を講じております。但し、当社は、裁判所、検察庁、警察等の公的機関の要請、または法令に基づく情報の開示・提供の要請があった場合に限り、これに協力する場合がございます。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapper}>
            <TextComponents.PinkNormalText fontSize="20px" marginBottom="11px">
              5. お客様の個人情報の管理
            </TextComponents.PinkNormalText>
            <NormalText>
              当社は、お客様の個人情報の取り扱いに関し、情報の漏洩、滅失、毀損、改ざん、不正アクセス等の防止やその他安全管理のために、最大限の努力をもって必要かつ適切な措置を講じております。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapper}>
            <TextComponents.PinkNormalText fontSize="20px" marginBottom="11px">
              6. 個人情報の訂正・利用停止・消去
            </TextComponents.PinkNormalText>
            <NormalText>
              お客様の個人情報について、自己情報の訂正若しくは削除、又は利用停止を求められたときは、所定の手続きでご本人様であることを確認のうえ、社会通念や慣行に照らし合理的な範囲ですみやかに対応致します。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapper}>
            <TextComponents.PinkNormalText fontSize="20px" marginBottom="11px">
              7. 改善措置
            </TextComponents.PinkNormalText>
            <NormalText>
              当社は、個人情報保護に関する取り組みについて、社会環境の変化に的確に対応するよう勤め、継続的に見直し、改善に努めます。
            </NormalText>
          </div>
        </div>
      </div>
      <div className={styles.spOnly}>
        <div>
          <SubtitleComponents.PinkFillSubTitle
            fontSize="55px"
            lineHeight="normal"
          >
            PRIVACY POLICY
          </SubtitleComponents.PinkFillSubTitle>
          <TextComponents.PinkNormalText fontSize="18px" marginTop="-12px">
            プライバシーポリシー
          </TextComponents.PinkNormalText>
        </div>
        <div className={styles.privacyTextWrapperSP}>
          <div className={styles.privacyTextSectionWrapperSP}>
            <NormalText>
              Vista（以下、当社）は、個人情報の取扱いについて個人情報保護方針を定めます。
              <br />
              また、役員及び従業員が個人情報を適切に取り扱うことの重要性を認識した上でこれを遵守し、お客様の個人情報の保護を行ってまいります。なお、ここでいう個人情報とは、個人情報の保護に関する法律に基づいた、お客様の氏名、年齢、電話番号、電子メールアドレス、住所など、お客様個人を特定することのできる情報として規定します。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapperSP}>
            <TextComponents.PinkNormalText fontSize="15px" marginBottom="8px">
              1. 個人情報の取り扱い
            </TextComponents.PinkNormalText>
            <NormalText>
              個人情報保護に関する法令及びその他の規範を遵守します。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapperSP}>
            <TextComponents.PinkNormalText fontSize="15px" marginBottom="8px">
              2. 個人情報の収集・利用 
            </TextComponents.PinkNormalText>
            <NormalText marginBottom="30px">
              お客様にお断りなく、個人情報を収集することはせずに適法かつ公正な手段によって行います。
              <br />
              当社は、お客様から個人情報をお預かりする場合は、利用目的や利用方法を通知またはウェブサイト等に公表したうえで、必要な範囲の個人情報をお預かりいたします。
              <br />
              なお、当社が収集する個人情報には、以下の情報が含まれる場合があります。
            </NormalText>
            <NormalText>
              ・ 氏名、年齢、電話番号、電子メールアドレス、住所
              <br />
              ・位置情報（ユーザーの位置データ、GPS情報、IPアドレス）
              <br />
              ・コミュニケーション履歴（カスタマーサポートとのやり取り、チャットログ、メール）
              <br />
              ・プロフィール情報（趣味、興味、その他の自己紹介に関する情報）
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapperSP}>
            <TextComponents.PinkNormalText fontSize="15px" marginBottom="8px">
              3. 個人情報の利用目的
            </TextComponents.PinkNormalText>
            <NormalText>
              あらかじめお客様に明示させて頂いた目的の範囲内で利用し、範囲を超えて利用する必要が生じた場合には、事前にお客様にその目的を連絡し、同意なしに利用は致しません。
              <br />
              なお、当社では、お預かりした個人情報を年齢分布、趣味嗜好分布、ご利用履歴等で統計的に処理したうえで第三者へ提供し、または一般公開する場合がございますが、これらの情報は、個人を特定できるものではございません。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapperSP}>
            <TextComponents.PinkNormalText fontSize="15px" marginBottom="8px">
              4. 個人情報の開示
            </TextComponents.PinkNormalText>
            <NormalText>
              お客様からご提供頂きました個人情報は、法令の定める場合等、正当な理由がある場合を除き、お客様の同意を得ることなく、第三者に提供、開示することは致しません。
              <br />
              なお、当社は、あらかじめ利用規約等によりお客様の同意を得て、各事業に必要な範囲内で、当社の提携会社および業務委託先に個人情報を開示する場合がございますが、この場合、当該提携会社および業務委託先が個人情報を漏洩し、再提供する等、あらかじめ定められた利用目的を超えて利用しないように秘密保持契約を締結する等の適切な措置を講じております。但し、当社は、裁判所、検察庁、警察等の公的機関の要請、または法令に基づく情報の開示・提供の要請があった場合に限り、これに協力する場合がございます。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapperSP}>
            <TextComponents.PinkNormalText fontSize="15px" marginBottom="8px">
              5. お客様の個人情報の管理
            </TextComponents.PinkNormalText>
            <NormalText>
              当社は、お客様の個人情報の取り扱いに関し、情報の漏洩、滅失、毀損、改ざん、不正アクセス等の防止やその他安全管理のために、最大限の努力をもって必要かつ適切な措置を講じております。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapperSP}>
            <TextComponents.PinkNormalText fontSize="15px" marginBottom="8px">
              6. 個人情報の訂正・利用停止・消去
            </TextComponents.PinkNormalText>
            <NormalText>
              お客様の個人情報について、自己情報の訂正若しくは削除、又は利用停止を求められたときは、所定の手続きでご本人様であることを確認のうえ、社会通念や慣行に照らし合理的な範囲ですみやかに対応致します。
            </NormalText>
          </div>
          <div className={styles.privacyTextSectionWrapperSP}>
            <TextComponents.PinkNormalText fontSize="15px" marginBottom="8px">
              7. 改善措置
            </TextComponents.PinkNormalText>
            <NormalText>
              当社は、個人情報保護に関する取り組みについて、社会環境の変化に的確に対応するよう勤め、継続的に見直し、改善に努めます。
            </NormalText>
          </div>
        </div>
      </div>
    </div>
  );
};
