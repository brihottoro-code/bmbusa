import { FaBook, FaUsers, FaGavel, FaUserCheck, FaCalendarAlt, FaHandshake } from 'react-icons/fa'

export default function Constitution() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <FaBook className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Constitution</h1>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl">
            The governing document of Brihottor Mymensinghbashi USA Inc.
          </p>
        </div>
      </section>

      {/* Constitution Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            {/* Article 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">1</span>
                Name of the Organization
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  <strong>Brihottor Mymensinghbashi USA Inc.</strong>
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>a. The organization must be duly registered.</li>
                  <li>b. The organization shall be entirely non-political and social in nature.</li>
                </ul>
              </div>
            </div>

            {/* Article 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">2</span>
                Objectives of the Organization
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-gray-700"><strong>a.</strong> To preserve, nurture, and celebrate the culture and traditions of Mymensingh while living abroad or upon returning home.</p>
                </div>
                <div className="border-l-4 border-accent-600 pl-4">
                  <p className="text-gray-700"><strong>b.</strong> To provide temporary shelter and employment assistance (based on qualification) to any immigrant from Greater Mymensingh who arrives in the USA, to the extent possible, with sympathy and cooperation.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="text-gray-700"><strong>c.</strong> If a person from Greater Mymensingh passes away in the USA, the organization will assist in sending the body back home or arranging funeral services locally, and will, if necessary, support the bereaved family with compassion and financial aid.</p>
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Note: If the deceased was a member for at least 2 years or affiliated with multiple organizations, and another organization voluntarily arranges the funeral, the bereaved family will be given a one-time donation of $1000 or $1500.
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="text-gray-700"><strong>d.</strong> If a member residing in the USA or Bangladesh suffers from a severe illness or is affected by a natural disaster resulting in loss of property, the organization will provide humanitarian and financial assistance.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-gray-700"><strong>e.</strong> All members must maintain a brotherly and friendly relationship, treating one another with respect and empathy regardless of race, religion, or background, and supporting each other in times of happiness and sorrow.</p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-4">
                  <p className="text-gray-700"><strong>f.</strong> Any distinguished personality or notable individual from Mymensingh visiting the USA (for official or social purposes) shall be honored and felicitated by the organization.</p>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">3</span>
                Membership Eligibility and Process
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>a.</strong> Members must be permanent residents of Greater Mymensingh (marital connections also accepted).</li>
                  <li><strong>b.</strong> Minimum age to be a member is 18.</li>
                  <li><strong>c.</strong> Applicants must submit a completed form with a photo and pay the prescribed fee (Zelle payment in the organization&apos;s name is accepted).</li>
                  <li><strong>d.</strong> Every member must pay $10 monthly dues or a one-time $120 annual payment.</li>
                  <li><strong>e.</strong> All general members are eligible to vote.</li>
                  <li><strong>f.</strong> If elections are held, all members can exercise their voting rights.</li>
                  <li><strong>g.</strong> Every member must attach a photo to their membership form for recordkeeping.</li>
                  <li><strong>h.</strong> Distinguished individuals can become honorary lifetime members by donating at least $1000 and may be recognized for their contribution to the community.</li>
                  <li><strong>i.</strong> Honorary/lifetime members shall be awarded at the organization&apos;s annual picnic and social event each year with a medal of recognition.</li>
                  <li><strong>j.</strong> Members who do not pay dues for over 2 years will have their membership revoked.</li>
                  <li><strong>k.</strong> Any member convicted or found guilty of a crime in the USA will lose their membership.</li>
                  <li><strong>l.</strong> If a member is sentenced to at least 6 months or fined $20,000 or more, their membership will be canceled without explanation.</li>
                </ul>
              </div>
            </div>

            {/* Article 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">4</span>
                Executive Committee Formation & Rules
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>a.</strong> The Executive Committee may consist of a maximum of 41 members.</li>
                  <li><strong>b.</strong> Members may be selected through general voting or decisions by the Advisory / Ad-hoc / Judicial Committee.</li>
                  <li><strong>c.</strong> The Executive Committee&apos;s term will be 2 years.</li>
                  <li><strong>d.</strong> Within 90 days before term completion, the responsibility must be handed over to the Ad-hoc or Judicial Committee.</li>
                  <li><strong>e.</strong> Before handing over power, the Executive Committee must appoint an Election Commission.</li>
                </ul>
              </div>
            </div>

            {/* Article 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">5</span>
                Designated Positions within Executive Committee
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <ul className="space-y-2">
                    <li>• President</li>
                    <li>• Senior President</li>
                    <li>• Vice President</li>
                    <li>• General Secretary</li>
                    <li>• Assistant General Secretary</li>
                    <li>• Organizational Secretary</li>
                    <li>• Assistant Organizational Secretary</li>
                    <li>• Treasurer</li>
                    <li>• Assistant Treasurer</li>
                    <li>• Publicity Secretary</li>
                    <li>• Cultural Secretary</li>
                    <li>• Assistant Cultural Secretary</li>
                    <li>• Social Welfare Secretary</li>
                    <li>• Sports Secretary</li>
                    <li>• Education Secretary</li>
                    <li>• Religious Affairs Secretary</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Literary Secretary</li>
                    <li>• Women&apos;s Affairs Secretary</li>
                    <li>• Assistant Women&apos;s Affairs Secretary</li>
                    <li>• Hospitality Secretary</li>
                    <li>• 5 Senior Members</li>
                    <li>• 6 General Members</li>
                  </ul>
                </div>
                <p className="mt-4 text-gray-700 font-semibold">Total: 31 members</p>
              </div>
            </div>

            {/* Article 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">6</span>
                Committee Formation Guidelines
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>a.</strong> Each district/upazila from Mymensingh must be represented by at least one qualified member.</li>
                  <li><strong>b.</strong> If no suitable representative is found from a region, the Ad-hoc / Judicial Committee and Election Commission will jointly decide.</li>
                  <li><strong>c.</strong> The President and General Secretary may not hold office for more than two consecutive terms (4 years).</li>
                  <li><strong>d.</strong> In case of natural disaster or political unrest in the USA that prevents handover, the current committee may continue for 4–6 months.</li>
                  <li><strong>e.</strong> The President and General Secretary may not appoint or remove committee members alone.</li>
                  <li><strong>f.</strong> In case of death, disappearance, or incapacity of the President or General Secretary, the Senior Vice President and Assistant General Secretary shall continue responsibilities.</li>
                  <li><strong>g.</strong> Any resolution passed in meetings must be approved by two-thirds of committee members.</li>
                  <li><strong>h.</strong> If the President is absent, the Senior Vice President will lead meetings.</li>
                  <li><strong>i.</strong> No asset of the organization may be owned or sold solely under the name of the President or General Secretary.</li>
                  <li><strong>j.</strong> General meetings must be held every 90 days.</li>
                  <li><strong>k.</strong> In emergencies, a meeting can be called within 24 hours upon discussion between President and General Secretary.</li>
                  <li><strong>l.</strong> Any member absent in 3 consecutive meetings without valid reason will lose their position.</li>
                </ul>
              </div>
            </div>

            {/* Article 7-12 Summary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">7-12</span>
                Additional Articles
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Article 7: Responsibilities of Executive Positions</h3>
                  <p className="text-gray-700">Defines the roles and responsibilities of each executive position including President, General Secretary, Treasurer, and other secretaries.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Article 8: Advisory Committee</h3>
                  <p className="text-gray-700">Must be formed within 90 days of new Executive Committee taking office, consisting of 5 to 17 members from Mymensingh.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Article 9: Ad-hoc Committee Roles</h3>
                  <p className="text-gray-700">Consists of 3 to 5 members with a 90-day term, formed through general consensus to assist with elections.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Article 10: Election Commission</h3>
                  <p className="text-gray-700">Minimum 3 members (5 if voter count exceeds 1000), must be Mymensingh-origin U.S. Green Card holders or citizens with at least a college degree.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Article 11: Annual Activities</h3>
                  <p className="text-gray-700">Includes Iftar party, honoring notable personalities, arranging funeral/memorial services, and organizing prayers and commemorations.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Article 12: Amendment Clause</h3>
                  <p className="text-gray-700">Any article of the constitution may be amended by a two-thirds vote of the Executive Committee for the sake of organizational development.</p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <p className="text-gray-700">
                <strong>Submitted By:</strong> Proposer of the Constitution of Brihottor Mymensinghbashi USA Inc. (Term: 2019–2020)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

