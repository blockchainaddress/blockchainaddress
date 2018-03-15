package main

import (
	"github.com/labstack/echo"
	mw "github.com/labstack/echo/middleware"
	//"net/http"
	"fmt"
)

func main() {
	e := echo.New()
	e.Use(mw.Logger())
	e.Use(mw.GzipWithConfig(mw.GzipConfig{
		Level: 1,
	}))

	fmt.Printf("development? :%t", develop)

	if develop {
		e.File("/", "devclient/public/index.html")
		e.Static("/static", "devclient/static")
	} else {
		// production環境ではinline化されたHTMLだけを使う
		e.File("/", "public/index.html")
	}

	e.Logger.Fatal(e.Start(":9000"))
}
