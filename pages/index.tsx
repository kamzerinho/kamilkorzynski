import DefaultLayout from "@/layouts/default"
import {Card, CardBody} from "@heroui/react"
import {Image} from "@heroui/react"
import {Link} from "@heroui/link"

import {Phone, Email, Send} from "@deemlol/next-icons"
import {Progress} from "@heroui/progress"
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
} from "@/components/icons";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="grid grid-cols-3 gap-4">
				<div className="">
					<Card>
						<CardBody>
							<p className="text-xl font-bold text-center">Kamil Korżyński</p>
							<p className="text-medium text-slate-400 text-center ">
								Web Developer
							</p>
							<div className="grid place-items-center">
								<Image
									isBlurred
									alt="Blank image"
									className="mt-5"
									src="cv.jpg"
									width={240}
								/>
							</div>
							<div className="my-5 text-sm">
								<p className="text-center text-2xl max-md:text-base font-bold">
									Kontakt
								</p>
								<p className="m-3 text-black dark:text-white">
									<Link className="gap-2" href="tel:+48667432333">
										<Phone size={24} />
										<p>667 432 333</p>
									</Link>
								</p>
								<p className="m-3 text-black dark:text-white">
									<Link
										className="gap-2"
										href="mailto:kamilkorzynski98@gmail.com">
										<Email size={24} />
										<p>kamilkorzynski98@gmail.com</p>
									</Link>
								</p>
								<p className="m-3 text-black dark:text-white">
									<Link className="gap-2">
										<Send size={24}/>
										<p>16-001 Kleosin, ul. Kraszewskiego 10/16</p>
									</Link>
								</p>
								<p className="m-3">
									          <Link className="gap-2" isExternal href={siteConfig.links.github} title="GitHub">
                              <GithubIcon className="text-default-500" />
                              kamzerinho
                            </Link>
								</p>
							</div>
							<div className="my-5 text-sm">
								<p className="text-center text-2xl max-md:text-base font-bold">
									Umiejętności
								</p>
								<div className="m-3">
									<p>HTML</p>
									<Progress
										aria-label="Loading..."
										className="max-w-md my-2"
										value={80}
									/>
								</div>
								<div className="m-3">
									<p>CSS</p>
									<Progress
										aria-label="Loading..."
										className="max-w-md my-2"
										value={70}
									/>
								</div>
								<div className="m-3">
									<p>JS</p>
									<Progress
										aria-label="Loading..."
										className="max-w-md my-2"
										value={50}
									/>
								</div>
								<div className="m-3">
									<p>PHP</p>
									<Progress
										aria-label="Loading..."
										className="max-w-md my-2"
										value={30}
									/>
								</div>
								<div className="m-3">
									<p>React, NextJS</p>
									<Progress
										aria-label="Loading..."
										className="max-w-md my-2"
										value={50}
									/>
								</div>
								<div className="edukacja my-5">
									<p className="text-center text-2xl font-bold max-md:text-base">
										Edukacja
									</p>
									<div className="m-3">
										<p className="text-xl max-md:text-base font-black">
											ZSE w Białystoku
										</p>
										<p>Technik Cyfrowych Procesów Graficznych</p>
										<p>2014 - 2017</p>
									</div>
									<div className="m-3">
										<p className="text-xl max-md:text-base font-black">
											2 SLO w Białystoku
										</p>
										<p>2017 - 2018</p>
									</div>
									<div className="m-3">
										<p className="text-xl max-md:text-base font-black">
											Politechnika Białostocka
										</p>
										<p>Informatyka</p>
										<p>2019-2021</p>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className="col-span-2 flex flex-col justify-between">
					<Card>
						<CardBody>
							<div>
								<p className="text-3xl p-[15px] max-md:p-[5px] max-md:text-sm">
									O mnie
								</p>
							</div>
							<div className="p-[15px] max-md:p-[5px]">
								<p className="max-md:text-sm">
									Nazywam się Kamil Korżyński, mam 27 lat i od ponad 10 lat
									interesuję się web developmentem. Swoją przygodę z tworzeniem
									stron internetowych rozpocząłem już w technikum na kierunku
									grafiki komputerowej, gdzie po raz pierwszy zetknąłem się z
									możliwościami, jakie oferuje rozwój stron i aplikacji
									webowych.
								</p>

								<p className="max-md:text-sm">
									Po ukończeniu szkoły zdobywałem doświadczenie jako web
									developer w dużej firmie, pracując początkowo z Joomlą, a
									następnie specjalizując się w PrestaShop. Równolegle tworzyłem
									strony internetowe w WordPressie dla klientów indywidualnych.
									Obecnie prowadzę własną działalność gospodarczą, w ramach
									której kompleksowo tworzę strony internetowe oraz sklepy
									online – od projektu, przez wdrożenie, po uruchomienie na
									hostingu i pełne przygotowanie do publikacji.
								</p>
								<p className="max-md:text-sm">
									Moje braki z wiedzy teoretycznej wypełnia umiejętność
									korzystania z dokumentacji oraz sztucznej inteligencji. Dzięki
									temu jestem w stanie bez problemu rozwiązywać problemy czy też
									tworzyć nowe rzeczy.
								</p>
								<p className="max-md:text-sm">
									Na życzenie klientów tworzę również proste moduły, głównie w
									PHP, oraz rozbudowuję istniejące rozwiązania o nowe
									funkcjonalności. Dbam o ciągły rozwój i aktualizację wiedzy,
									dlatego niedawno rozpocząłem naukę frameworków React i
									Next.js.
								</p>

								<p className=" max-md:text-sm">
									Prywatnie pasjonuję się sportem – wolny czas najchętniej
									spędzam grając w piłkę nożną lub w gry komputerowe. Moją
									ulubioną porą roku jest zima – każdą okazję staram się
									wykorzystać na wyjazdy w góry i jazdę na snowboardzie.
								</p>
							</div>
						</CardBody>
					</Card>
					<Card>
						<CardBody>
							<div className="p-[15px] max-md:p-[5px] max-md:text-sm">
								<div>
									<p className="text-3xl p-[15px] max-md:p-[5px] max-md:text-sm">
										Doświadczenie
									</p>
								</div>
								<div className="p-[15px] max-md:p-[5px]">
									<div className="columns-2 my-2">
										<div className="my-2">
											<p className="text-3xl font-bold max-md:text-sm">
												Junior Web Developer
											</p>
										</div>
										<div className="my-2">
											<p className="text-3xl font-bold text-right max-md:text-sm">
												2020-2022
											</p>
										</div>
									</div>
									<div className="my-2">
										<p className="font-black font-xl max-md:text-sm">
											Panorama Firm
										</p>
									</div>
									<div className="my-2">
										<p className="max-md:text-sm">
											W tej firmie rozpocząłem swoją przygodę z przygotowaniem
											oraz obsługą stron internetowych, głównie w oprogramowaniu
											Joomla. Był to okres w którym przeszedłem szereg szkoleń,
											aby lepiej zrozumieć proces działania firmy oraz kursów od
											strony technicznej, w większości dotyczyły one rozwoju
											HTML i CSS, po części zrozumienie JavaScript oraz PHP.
										</p>
									</div>
									<div className="columns-2 my-2">
										<div className="my-2">
											<p className="text-3xl font-bold max-md:text-sm">
												Junior Web Developer
											</p>
										</div>
										<div className="my-2">
											<p className="text-3xl font-bold text-right max-md:text-sm">
												2022-2023
											</p>
										</div>
									</div>
									<div className="my-2">
										<p className="font-black font-xl max-md:text-sm">
											WeNet sp. z o. o.
										</p>
									</div>
									<div className="my-2">
										<p className="max-md:text-sm">
											Tworzenie, modyfikacja i utrzymanie witryn internetowych
											opartych na platformie PrestaShop. Optymalizacja kodu oraz
											dostosowywanie witryn pod kątem wydajności, responsywności
											i UX. Współpraca z zespołem programistycznym przy
											rozwiązywaniu bieżących problemów i wyzwań projektowych.
											Testowanie i rozwiązywanie problemów związanych z
											funkcjonalnością i kompatybilnością witryn. Znajomość
											platformy PrestaShop i umiejętność dostosowywania jej do
											indywidualnych potrzeb klientów.
										</p>
									</div>
									<div className="columns-2 my-2">
										<div className="my-2">
											<p className="text-3xl font-bold max-md:text-sm">
												Web Developer
											</p>
										</div>
										<div className="my-2">
											<p className="text-3xl font-bold text-right max-md:text-sm">
												2024-
											</p>
										</div>
									</div>
									<div className="my-2">
										<p className="font-black font-xl max-md:text-sm">
											Freelance
										</p>
									</div>
									<div className="my-2">
										<p className="max-md:text-sm">
											Od połowy 2024 roku samodzielnie tworzę strony oraz sklepy
											internetowe. Postanowiłem zbudować własną markę i
											pozyskiwać klientów na własną rękę, co jest dużym, ale
											satysfakcjonującym wyzwaniem. W ramach rozwoju
											współpracuję również z agencjami reklamowymi oraz firmami
											z branży IT, co pozwala mi poszerzać doświadczenie i
											umiejętności. Stale śledzę nowości technologiczne i dbam o
											rozwój – aktualnie koncentruję się na nauce Node.js i
											React. Moje braki z wiedzy teoretycznej wypełnia
											umiejętność korzystania z dokumentacji oraz sztucznej
											inteligencji. Dzięki temu jestem w stanie bez problemu
											rozwiązywać problemy czy też tworzyć nowe rzeczy.
										</p>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</section>
			<div className="w-full flex items-center justify-center py-3">
				<p>
					<p>
						Wyrażam zgodę na przetwarzanie moich danych osobowych przez (nazwa
						firmy) w celu prowadzenia rekrutacji na aplikowane przeze mnie
						stanowisko.
					</p>
				</p>
			</div>
		</DefaultLayout>
	)
}
