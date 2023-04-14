import React from 'react'
import style from '../../styles/Home.module.css'

import Image from 'next/image'
import Link from 'next/link'

// Images
import logo from '../../public/images/logo.svg'
import instagram from '../../public/images/instagram.png'
import facebook from '../../public/images/facebook.png'



export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${style.container} ${style.for_footer}`}>
                <div className={style.footer_grid}>
                    <div
                        id={style["w-node-_5ca90323-55fb-c5c9-daa8-56ea119e00a0-119e009d"]}
                        className={style.footer_column}
                    >
                        <div className={style.top_small_text}>Links</div>
                        <div className={style.margin_10px}>
                            <div className={style.w_dyn_list}>
                                <div className={style.w_dyn_items}>
                                    <div className={style.w_dyn_item}>
                                        <Link href="/" className={style.footer_link}>
                                            Inicio
                                        </Link>
                                    </div>
                                    <div className={style.w_dyn_item}>
                                        <Link href="/Portfolio" className={style.footer_link}>
                                            Portafolio
                                        </Link>
                                    </div>
                                    <div className={style.w_dyn_item}>
                                        <Link href="/About" className={style.footer_link}>
                                            Élla
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={style["w-node-_5ca90323-55fb-c5c9-daa8-56ea119e00ba-119e009d"]}>
                        <div className={style.footer_column}>
                            <div className={style.top_small_text}>social</div>
                            <div className={style.margin_10px}>
                                <div className={style.social_footer}>
                                    <Link
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        className={`${style.social_icon} ${style.w_inline_block}`}
                                    >
                                        <Image
                                            src={instagram}
                                            loading="lazy"
                                            width={20}
                                            alt=""
                                            className={style.social_image}
                                        />
                                        <div
                                            className={style.social_circle}
                                            style={{ width: "0%", height: "0%" }}
                                        />
                                    </Link>
                                    <Link
                                        href="https://www.twitter.com/"
                                        target="_blank"
                                        className={`${style.social_icon} ${style.w_inline_block}`}
                                    >
                                        <Image
                                            src={facebook}
                                            loading="lazy"
                                            width={20}
                                            alt=""
                                            className={style.social_image}
                                        />
                                        <div
                                            className={style.social_circle}
                                            style={{ width: "0%", height: "0%" }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={`${style.footer_grid} ${style.center}`}>
                    <div
                        id={style["w-node-_5ca90323-55fb-c5c9-daa8-56ea119e00d6-119e009d"]}
                        className={style.last_item_footer}
                    >
                        <p className={style.copyright}>
                            © 2023{" "}
                            <Link
                                href="/"
                                target="_blank"
                                className={`${style.dark_link} ${style.white}`}
                            >
                                An
                            </Link>{" "}
                        </p>
                    </div>
                    <Link
                        id={style["w-node-_5ca90323-55fb-c5c9-daa8-56ea119e00de-119e009d"]}
                        href="/"
                        className={`${style.footer_logo_link} ${style.w_inline_block}`}
                    >
                        <Image
                            src={logo}
                            loading="lazy"
                            width={40}
                            alt=""
                        />
                    </Link>
                    <div
                        id={style["w-node-_5ca90323-55fb-c5c9-daa8-56ea119e00e0-119e009d"]}
                        className={style.footer_flex}
                    >
                        <Link
                            href="/"
                            className={`${style.button_line} ${style.w_inline_block}`}
                        >
                            <div>condiciones de uso</div>
                            <div className={style.line} style={{ width: "15%" }} />
                        </Link>
                        <Link href="/" className={`${style.button_line} ${style.w_inline_block}`}>
                            <div>Licencia</div>
                            <div className={style.line} style={{ width: "15%" }} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
